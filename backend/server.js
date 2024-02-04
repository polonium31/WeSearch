const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./key.json");
const { log } = console;

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
    const { email, password } = req.body;

    const userRecord = await admin.auth().getUserByEmail(email);

    if (userRecord) {
      const verified = await auth.comparePassword(
        password,
        userRecord.providerId
      );
      if (verified) {
        return res.status(200).json({
          message: "Login successful",
          user: {
            uid: userRecord.uid,
            email: userRecord.email,
          },
          idToken: await admin.auth().createCustomToken(userRecord.uid),
        });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email follows the regex
    const emailRegex = /^[a-z0-9]+@mcmaster\.ca$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Not a McMaster email ID" });
    } else {
      const userRecord = await admin.auth().createUser({
        email,
        password,
      });

      const userRef = db.collection("user").doc(userRecord.uid);
      await userRef.set({
        email: userRecord.email,
        uid: userRecord.uid,
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
    const { uid } = req.body;
    await admin.auth().deleteUser(uid);
    const userRef = db.collection("user").doc(uid);
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
    await admin.auth().sendPasswordResetEmail(email);
    return res.status(200).json({ message: "Password reset email sent" });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// -------------------  User's API  -------------------

// get first 10 events
app.get("/events", (req, res) => {});

// get all events
app.get("/events/access_token", (req, res) => {});

// get event details
app.get("/events/{id}", (req, res) => {});

// search by filters
app.get("/search", (req, res) => {});

// store user details
app.post("/user-details", (req, res) => {});

// register to event
app.post("/register-to-event", (req, res) => {});

// edit user details
app.patch("/edit-user-details", (req, res) => {});

// unregister to event
app.delete("/unregister-to-event", (req, res) => {});

// -------------------  Researcher's API  -------------------

// get all active events created by the researcher
app.get("/active-research-event", (req, res) => {});

// get all past events created by the researcher
app.get("/past-research-event", (req, res) => {});

// get all active events created by the researcher
app.get("/participants-details/{id}", (req, res) => {});

// create new event
app.post("/research-event-details", (req, res) => {});

// close event
app.post("/close-event", (req, res) => {});

// add researcher details
app.post("/researcher-details", (req, res) => {});

// edit researcher details
app.patch("/edit-researcher-details", (req, res) => {});

// edit event details
app.patch("/edit-research-event-details", (req, res) => {});

// delete event
app.delete("/delete-event", (req, res) => {});

const port = 5050;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
