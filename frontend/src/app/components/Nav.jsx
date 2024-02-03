import Link from "next/link";
import Logo from "/public/assets/logo.png";
export default () => {
    return (
        <>
        <div className="nav">
            <Link href="/events">Events</Link>
            <Link href="/"><img src={Logo.src}></img></Link>
            <Link href="/">Profile</Link>
        </div>
        <hr className="navline" />
        </>
    );
};