import Image from "next/image";
import styles from "./Splash.module.css";

export default function Splash() {
    return <div className={styles.splash}>
        <Image
        alt="Krishna Katha"
        src= "/splash.png"
        height={350}
        width={350}
        className= {styles.splashImage}
        />
        <h2 className={styles.splashTitle}>Krishna Katha</h2>
    </div>;
}