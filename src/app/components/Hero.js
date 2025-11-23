import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
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
                ଓଁ ନାରାୟଣଂ ନମସ୍କୃତ୍ୟ ନରଂ ଚୈବ ନରୋତ୍ତମମ୍ ।<br></br>

                ଦେବୀଂ ସରସ୍ୱତୀଂ ବ୍ୟାସଂ ତତୋ ଜୟମୁଦୀରୟେତ୍ ॥<br></br>

                ମୂକଂ କରୋତି ବାଚାଳଂ ପଙ୍ଗୁ°ଲଂଘୟତେ ଗିରିମ୍ ।<br></br>

                ୟତ୍କୃପା ତମହଂ ବନ୍ଦେ ପରମାନନ୍ଦମାଧବମ୍ ॥
            </p>

            <button className={styles.startButton}>
                Start
            </button>

        </div>
    </section>;
}