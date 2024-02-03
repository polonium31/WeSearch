import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";
import ParticipantHome from "./components/participants/ParticipantHome";
import Nav from "./components/Nav";

export default function Home() {
  return (
   <main>
      {/* <ParticipantLogin></ParticipantLogin> */}
      <Nav></Nav>
      <ParticipantHome />
   </main>
  );
}
