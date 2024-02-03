import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";
import ParticipantHome from "./components/participants/ParticipantHome";
import Nav from "./components/Nav";
import Homepage from "./components/homepage/Homepage";

export default function Home() {
  return (
   <main>
      <Homepage />
   </main>
  );
}
