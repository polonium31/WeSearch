"use client";

import { useState } from "react";
import { Grenze } from "next/font/google";
import Nav from "../Nav";

export default function Page() {
  const [success, setSuccess] = useState("0");

  let p = {};
  if (typeof window !== "undefined") {
    let parsed = JSON.parse(localStorage.getItem("profile"));
    if (parsed !== null) {
      p = parsed;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (typeof window !== "undefined") {
      localStorage.setItem("profile", JSON.stringify(formProps));
      const profile = JSON.parse(localStorage.getItem("profile"));
      console.log(profile);
    }
    setSuccess("1");
    setTimeout(() => {
      setSuccess("0.5");
    }, 2000);
    setTimeout(() => {
      setSuccess("0");
    }, 5000);
  }

  return (
    <>
      <div className="profile">
        <Nav></Nav>
        <form className="form contact-form" onSubmit={handleSubmit}>
          <div className="panel">
            <h1>Create Your Profile</h1>
            <br></br>

            <div className="formGroups">
              <div>
                <h3>Basic Information</h3>
                <br></br>
                <ul className="questions">
                  <li>
                    <p>Full Name</p>
                    <input type="text" defaultValue={p.name} name="name" />
                  </li>
                  <li>
                    <p>Date of Birth</p>
                    <input type="text" defaultValue={p.birth} name="birth" />
                  </li>
                  <li>
                    <p>Gender</p>
                    <input type="text" defaultValue={p.gender} name="gender" />
                  </li>
                  <li>
                    <p>Email</p>
                    <input type="text" defaultValue={p.email} name="email" />
                  </li>
                  <li>
                    <p>Phone Number</p>
                    <input type="text" defaultValue={p.phone} name="phone" />
                  </li>
                  <li>
                    <p>Address</p>
                    <input
                      type="text"
                      defaultValue={p.address}
                      name="address"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h3>Medical History</h3>
                <br></br>

                <ul className="questions">
                  <li>
                    <p>Medical Conditions</p>
                    <input
                      type="text"
                      defaultValue={p.conditions}
                      name="conditions"
                    />
                  </li>
                  <li>
                    <p>Previous Surgeries or Hospitalizations</p>
                    <input
                      type="text"
                      defaultValue={p.previous}
                      name="previous"
                    />
                  </li>
                  <li>
                    <p>Allergies</p>
                    <input
                      type="text"
                      defaultValue={p.allergies}
                      name="allergies"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h3>Medical History</h3>
                <br></br>

                <ul className="questions">
                  <li>
                    <p>Current Medications</p>
                    <input
                      type="text"
                      defaultValue={p.current}
                      name="current"
                    />
                  </li>
                  <li>
                    <p>Dosages and Frequencies</p>
                    <input
                      type="text"
                      defaultValue={p.dosages}
                      name="dosages"
                    />
                  </li>
                </ul>
              </div>

              <div>
                <h3>Family Medical History</h3>
                <br></br>

                <ul className="questions">
                  <li>
                    <p>Family History of Chronic Illnesses</p>
                    <input type="text" defaultValue={p.family} name="family" />
                  </li>
                </ul>
              </div>
              <div>
                <h3>Social History</h3>
                <br></br>

                <ul className="questions">
                  <li>
                    <p>Occupation and Work Environment</p>
                    <input type="text" defaultValue={p.work} name="work" />
                  </li>

                  <li>
                    <p>Alcohol Consumption</p>
                    <input
                      type="text"
                      defaultValue={p.alcohol}
                      name="alcohol"
                    />
                  </li>

                  <li>
                    <p>Recreational Drug Use</p>
                    <input type="text" defaultValue={p.drug} name="drug" />
                  </li>
                </ul>
              </div>
              <div>
                <h3>Lifestyle Factors</h3>
                <br></br>

                <ul className="questions">
                  <li>
                    <p>Diet and Nutritional Habits</p>
                    <input type="text" defaultValue={p.diet} name="diet" />
                  </li>

                  <li>
                    <p>Exercise or Physical Activity Routines</p>
                    <input
                      type="text"
                      defaultValue={p.exercise}
                      name="exercise"
                    />
                  </li>

                  <li>
                    <p>Sleep Patterns</p>
                    <input type="text" defaultValue={p.sleep} name="sleep" />
                  </li>
                </ul>
              </div>
            </div>
            <button
              style={{ marginTop: "1em" }}
              className="save btn syb"
              onSubmit={handleSubmit}
            >
              Save
            </button>
            <p
              style={{
                transition: "1s",
                color: "green",
                fontWeight: "bold",
                padding: "1em 0em",
                opacity: `${success}`,
              }}
            >
              Successfully saved
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
