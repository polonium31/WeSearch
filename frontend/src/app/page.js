import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./login/page";
import ParticipantSignup from "./participantSignup/page";
import ParticipantHome from "./participantHome/page";
import ResearcherSignup from "./components/researchers/ResearcherSignup"
import ResearcherLogin from "./components/researchers/ResearcherLogin"
import Nav from "./components/Nav";
import Homepage from "./components/homepage/Homepage";
import Profile from "./components/volunteer/Profile"

export default function Home() {
  return (
   <main>
      {/* <Nav></Nav> */}
      <Homepage  />
      {/* <ParticipantLogin/> */}
      {/* <ResearcherSignup/> */}
      {/* <ParticipantHome/> */}
      {/* <Profile></Profile> */}
   </main>
  );
}
