import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";
import ParticipantHome from "./components/participants/ParticipantHome";

export default function Home() {
  return (
   <main>
      {/* <ParticipantLogin></ParticipantLogin> */}
      <ParticipantHome/>
   </main>
  );
}