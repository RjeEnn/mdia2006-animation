
import Head from "next/head";
import styles from "../styles/EndScreen.module.css";
import Image from 'next/image';
import Link from 'next/link'

export default function endScreen() {

  return(
    <div className={`${styles.container} ${styles["bg-final"]}`}>
      <video muted autoPlay loop className={styles.video}>
        <source src="/videos/rowancry.mp4" type="video/mp4"/>
      </video>

      <audio src="/music/end.mp3" autoPlay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
        <embed src="/music/end.mp3" width="180" height="90" hidden={true} />
      </audio>

      <div className={styles.overlay}></div>

      <div className={`${styles['text']} ${styles["hvr-bob"]}`}>
        <p>Rowan was going through a lot of stress recently, and because of that, he began halucinating heavily in order to cope.</p>
        <p>Remember to get proper rest!</p>
      </div>

      <div className={styles["btn-layout"]}>
       <Link href="https://youtu.be/q7TM_ZDACu4" passHref><button className={`${styles['btn']} ${styles["hvr-bob"]}`}>Check Out The Video</button></Link>
       <Link href="/" passHref><button className={`${styles['btn']} ${styles["hvr-bob"]}`}>Restart</button></Link>
      </div>
    </div>
  )
}