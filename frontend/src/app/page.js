import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";

export default function Home() {
  return (
   <main>
      <ParticipantLogin></ParticipantLogin>
   </main>
  );
}
