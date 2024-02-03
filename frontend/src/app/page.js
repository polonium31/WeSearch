import Image from "next/image";
import styles from "./page.module.css";
import ParticipantLogin from "./components/participants/ParticipantLogin";
import Nav from "./components/Nav";
import Homepage from "./homepage/Homepage";

export default function Home() {
  return (
   <main>
      <Homepage />
   </main>
  );
}
