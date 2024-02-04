"use client";
import Logo from "/public/assets/logo.png";
import Link from "next/link";
import HCard from "./HCard";
import e1 from "/public/assets/homepageEvents/e1.jpg";
import e2 from "/public/assets/homepageEvents/e2.jpg";
import e3 from "/public/assets/homepageEvents/e3.jpg";
import ParticipantSignup from "../../components/connect";

export default () => {
  return (
    <>
      <div className="home">
        <div className="header">
          <div className="title">
            <h1>WeSearch</h1>
            <img className="logo" src={Logo.src}></img>
          </div>
          <p>
            A groundbreaking platform designed to seamlessly connect students
            with researchers, fostering a dynamic environment for collaborative
            projects within the academic realm.
          </p>
        </div>
        <hr />
        <div className="buttons">
          <Link
            href="/login"
            className="btn syb"
            // onClick={() => {
            //     console.log("Login");
            //     ParticipantSignup(
            //   "farha123@mcmaster.ca",
            //   "Wsdfkl13!sffd!",
            //   "farha",
            //   "hai",
            //   "participant"
            // )}}
          >
            Login
          </Link>
          <Link href="/participantSignup" className="btn lb">
            Participant Registration
          </Link>
          <Link href="/researcherSignup" className="btn db">
            Researcher Registration
          </Link>
        </div>
        <div className="events">
          <HCard
            d="Eligibility restricted to Computer Science Undergraduate students only. Deadline May 14, 2024."
            t="Measuring the happiness of students in computer science"
            i={e1}
          ></HCard>
          <HCard
            d="This research study is will be conducted over three weeks. Compensation is $200 for roughly 3 hours commitment."
            t="The impact on daily ibuprofen on weight gain"
            i={e2}
          ></HCard>
          <HCard
            d="Conducted by John Kin"
            t="Animal impact on human perception of cuteness"
            i={e3}
          ></HCard>
        </div>
        <div className="actions">
          <h2>
            There are so many research studies waiting for participants!
            Register for WeSearch today.
          </h2>
          <Link href="/login" className="btn syb">
            Login to see all events
          </Link>
        </div>
      </div>
    </>
  );
};
