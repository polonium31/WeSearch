import Logo from "/public/assets/logo.png";
import Link from "next/link";
import HCard from "./HCard";
import e1 from "/public/assets/homepageEvents/e1.jpg";
import e2 from "/public/assets/homepageEvents/e2.jpg";
import e3 from "/public/assets/homepageEvents/e3.jpg";
export default () => {
    return (
        <>
            <div className="home">
                <div className="header">
                    <div className="title">
                        <h1>WeSearch</h1>
                        <img className="logo" src={Logo.src}></img>
                    </div>
                    <p>Connecting studies to students to facilitate research and create opportunities!</p>
                </div>
                <hr />
                <div className="buttons">
                <Link href="/ParticipantLogin"className="btn yb">Login</Link>
                    <Link href="/ParticipantLogin"className="btn lb">Participant Registration</Link>
                    <Link href="/ResearcherLogin"className="btn db">Researcher Registration</Link>
                </div>
                <div className="events">
                    <HCard d="Eligibility restricted to Computer Science Undergraduate students only. Deadline May 14, 2024." t="Measuring the happiness of students in computer science" i={e1}></HCard>
                    <HCard d="This research study is will be conducted over three weeks. Compensation is $200 for roughly 3 hours commitment." t="The impact on daily ibuprofen on weight gain" i={e2}></HCard>
                    <HCard d="Conducted by John Kin" t="Animal impact on human perception of cuteness" i={e3}></HCard>
                </div>
                <div className="actions">
                    <h2>There are so many research studies waiting for participants!
                        Register for WeSearch today.
                    </h2>
                    <Link href="/login"className="btn yb">Login to see all events</Link>
                </div>
            </div>
        </>
    )
}