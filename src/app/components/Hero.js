"use client"
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero({ onStart }) {
    return <section>
        <div className={styles.hero}>
            <Image
                alt="Shree Krishna"
                src="/krishna.png"
                height="230"
                width="150" />
            <p className={styles.startVerse}>
                ଓଁ ଶ୍ରୀପରମାତ୍ମନେ ନମଃ
            </p>
            <p className={styles.namaskarVerse}>
                ଓଁ ନାରାୟଣଂ ନମସ୍କୃତ୍ୟ ନରଂ ଚୈବ ନରୋତ୍ତମମ୍ |<br></br>
                ଦେବୀ° ସରସ୍ଵତୀ° ବ୍ୟାସ° ତତୋ ଜୟମୁଦୀରୟେତ୍ ll<br></br>
                ମୁକଂ କରୋତି ବାଚାଳଂ  ପଙ୍ଗୁ°ଲଙ୍ଘୟତେ ଗିରିମ୍ |<br></br>
                ଯତ୍କୃପା ତମହଂ ବନ୍ଦେ ପରମାନନ୍ଦମାଧବମ୍ ll
            </p>

            <button className={styles.startButton} onClick={onStart}>
                Start
            </button>

        </div>
    </section>;
}