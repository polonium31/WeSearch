const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const credentials = require("./key.json");
const { log } = require("console");
const e = require("express");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {});

app.delete("/delete-user", (req, res) => {});

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
