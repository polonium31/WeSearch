import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";
import Nav from "./components/Nav";

export default function Home() {
  return (
   <main>
      <Nav></Nav>
      <ParticipantLogin></ParticipantLogin>
   </main>
  );
}
