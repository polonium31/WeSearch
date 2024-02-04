const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./key.json");
const { log } = console;

const { firestore } = require("./firebase.js");

const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} = require("firebase/auth");
const { authc } = require("./firebase.js");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();
const auth = admin.auth();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async (req, res) => {
  try {
    const { email, password, type } = req.body;

    const userCredential = await signInWithEmailAndPassword(
      authc,
      email,
      password
    );

    const userId = userCredential.user.uid;
    console.log(userId);
    const userDoc = await db.collection(type).doc(userId).get();
    const userData = userDoc.data();

    res.status(200).json({ user: userData });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(401).json({ message: "Unauthorized access" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password, firstname, lastname, type } = req.body;

    // Check if email follows the regex
    const emailRegex = /^[a-z0-9]+@mcmaster\.ca$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Not a McMaster email ID" });
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        authc,
        email,
        password,
        firstname,
        lastname,
        type
      );
      const userRecord = userCredential.user;
      const userRef = db.collection(type).doc(userRecord.uid);
      await userRef.set({
        email: userRecord.email,
        uid: userRecord.uid,
        firstname: firstname,
        lastname: lastname,
        type: type,
      });

      return res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      return res.status(409).json({ message: "Email already exists" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
});

app.post("/signout", async (req, res) => {
  try {
    const { uid } = req.body;
    await admin.auth().revokeRefreshTokens(uid);
    return res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    console.error("Error signing out:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/delete-user", async (req, res) => {
  try {
    const { uid, type } = req.body;
    await admin.auth().deleteUser(uid);
    const userRef = db.collection(type).doc(uid);
    await userRef.delete();
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    await sendPasswordResetEmail(authc, email);
    return res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// -------------------  User's API  -------------------

// get first 10 events
app.get("/event", (req, res) => {
  db.collection("active-events")
    .limit(10)
    .get()
    .then((snapshot) => {
      const events = [];
      snapshot.forEach((doc) => {
        events.push(doc.data());
      });
      res.status(200).json(events);
    })
    .catch((error) => {
      console.error("Error getting events:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// get all events
app.get("/events", (req, res) => {
  db.collection("active-events")
    .get()
    .then((snapshot) => {
      const events = [];
      snapshot.forEach((doc) => {
        events.push(doc.data());
      });
      res.status(200).json(events);
    })
    .catch((error) => {
      console.error("Error getting events:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// get event details
app.get("/events/{id}", (req, res) => {
  const eventId = req.params.id;
  db.collection("active-events")
    .doc(eventId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        res.status(200).json(doc.data());
      } else {
        res.status(404).json({ message: "Event not found" });
      }
    })
    .catch((error) => {
      console.error("Error getting event:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// search by filters
app.get("/search", (req, res) => {});

// store user details
app.post("/user-details", (req, res) => {});

// register to event
app.post("/register-to-event", (req, res) => {
  const { eventId, userId } = req.body;
  const participantRef = db.collection("participants").doc();
  participantRef
    .set({
      eventId: eventId,
      userId: userId,
    })
    .then(() => {
      res.status(200).json({ message: "Registered to event successfully" });
    })
    .catch((error) => {
      console.error("Error registering to event:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// edit user details
app.patch("/edit-user-details", (req, res) => {});

// unregister to event
app.delete("/unregister-to-event", (req, res) => {
  const { eventId, userId } = req.body;
  db.collection("participants")
    .where("eventId", "==", eventId)
    .where("userId", "==", userId)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
      res.status(200).json({ message: "Unregistered to event successfully" });
    })
    .catch((error) => {
      console.error("Error unregistering to event:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// -------------------  Researcher's API  -------------------

// get all active events created by the researcher
app.get("/active-research-event", (req, res) => {
  const researcherId = req.query.researcherId;
  db.collection("active-events")
    .where("researcherId", "==", researcherId)
    .get()
    .then((snapshot) => {
      const events = [];
      snapshot.forEach((doc) => {
        events.push(doc.data());
      });
      res.status(200).json(events);
    })
    .catch((error) => {
      console.error("Error getting active events:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// get all past events created by the researcher
app.get("/past-research-event", (req, res) => {
  const researcherId = req.query.researcherId;
  db.collection("past-events")
    .where("researcherId", "==", researcherId)
    .get()
    .then((snapshot) => {
      const events = [];
      snapshot.forEach((doc) => {
        events.push(doc.data());
      });
      res.status(200).json(events);
    })
    .catch((error) => {
      console.error("Error getting past events:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// get all active events created by the researcher
app.get("/participants-details", (req, res) => {
  const eventId = req.params.id;
  db.collection("participants")
    .where("eventId", "==", eventId)
    .get()
    .then((snapshot) => {
      const participants = [];
      snapshot.forEach((doc) => {
        participants.push(doc.data());
      });
      res.status(200).json(participants);
    })
    .catch((error) => {
      console.error("Error getting participants:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

// create new event
app.post("/research-event-details", (req, res) => {
  const { title, description, date, time, location, type, researcherId } =
    req.body;
  const eventRef = db.collection("active-events").doc();
  eventRef
    .set({
      title: title,
      description: description,
      date: date,
      time: time,
      location: location,
      type: type,
      researcherId: researcherId,
    })
    .then(() => {
      res.status(200).json({ message: "Event created successfully" });
    })
    .catch((error) => {
      console.error("Error creating event:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// close event
app.post("/close-event", (req, res) => {
  const { uid } = req.body;
  const eventRef = db.collection("active-events").doc(uid);
  eventRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const pastEventRef = db.collection("past-events").doc();
        pastEventRef
          .set({
            title: data.title,
            description: data.description,
            date: data.date,
            time: data.time,
            location: data.location,
            type: data.type,
          })
          .then(() => {
            eventRef.delete();
            res.status(200).json({ message: "Event closed successfully" });
          })
          .catch((error) => {
            console.error("Error closing event:", error);
            return res.status(500).json({ message: "Internal server error" });
          });
      } else {
        return res.status(404).json({ message: "Event not found" });
      }
    })
    .catch((error) => {
      console.error("Error closing event:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// add researcher details
app.post("/researcher-details", (req, res) => {
  const { position, department, uid } = req.body;
  const researcherRef = db.collection("researcher").doc(uid);
  researcherRef
    .update({
      department: department,
      position: position,
    })
    .then(() => {
      res.status(200).json({ message: "Researcher added successfully" });
    })
    .catch((error) => {
      console.error("Error adding researcher:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// edit researcher details
app.patch("/edit-researcher-details", (req, res) => {
  const { position, department, uid } = req.body;
  const researcherRef = db.collection("researcher").doc(uid);

  researcherRef
    .update({
      department: department,
      position: position,
    })
    .then(() => {
      res.status(200).json({ message: "Researcher updated successfully" });
    })
    .catch((error) => {
      console.error("Error updating researcher:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

// edit event details
app.patch("/edit-research-event-details", (req, res) => {});

// delete event
app.delete("/delete-event", (req, res) => {
  const { uid } = req.body;
  const eventRef = db.collection("active-events").doc(uid);
  eventRef
    .delete()
    .then(() => {
      res.status(200).json({ message: "Event deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting event:", error);
      return res.status(500).json({ message: "Internal server error" });
    });
});

const port = 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
