import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import DialogueBox from "../../components/dialogueBox";
import SceneOneLines from "../../script/sceneOne";
import styles from "../../styles/SceneOne.module.css";
import Image from 'next/image';
import Router from "next/router";

export async function getStaticProps() {
  const lines = SceneOneLines();

  return {
    props: {
      lines,
    },
  };
}

export default function SceneOne({ lines }) {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [personOne, setPersonOne] = useState('/images/blank.png')
  const [personTwo, setPersonTwo] = useState('/images/blank.png')
  const [people, setPeople] = useState('/images/blank.png')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const handleCount = () => {
      if (count == 0) {
        setPersonTwo("/images/rowan.png")
        return "bg-office";
      } else if (count == 1) {
        return "bg-outside";
      } else if (count == 2) {
        setPersonTwo('/images/blank.png')
      } else if (count == 3) {
        setPersonTwo('/images/rowan-surprised.png')
      } else if (count == 5) {
        setIsOpen(true)
        setDisabled(true)
        vidRef.current.play();
        setDisabled(true)
        setPersonOne('/images/alaia-surprised.png')
      } else if (count == 7) {
        setPersonOne('/images/alaia.png')
        setPersonTwo('/images/rowan.png')
      } else if (count == 8) {
        setPersonTwo('/images/rowan-surprised.png')
      } else if (count == 9) {
        setPersonOne('/images/alaia-surprised.png')
        setPersonTwo('/images/rowan.png')
      } else if (count == 10) {
        setPeople('/images/people.png')
      } else if (count == 11) {
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/rowan-reached.png')
      } else if (count == 12) {
        setDisabled(true)
        setPeople('/images/blank.png')
        setPersonTwo('/images/blank.png')
        Router.push('/scene/two')
      }
      return "bg-crossing";
    };

    setBgClass(handleCount());
  }, [count]);

  const [bgClass, setBgClass] = useState("bg-office");
  const vidRef = useRef(null);

  return (
    <div
      className={`${styles.container} ${styles[bgClass]} ${disabled ? styles["disable-click"] : ''}`}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <Head>
        <title>Scene One</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio src="/music/sceneOne.mp3" autoPlay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
        <embed src="/music/sceneOne.mp3" width="180" height="90" hidden={true} />
      </audio>
      <video ref={vidRef} muted className={`${styles.video} ${isOpen ? styles["fade-in"] : styles.disabled}`} onEnded={() => {setIsOpen(false); setDisabled(false)}}>
        <source src="/videos/truckspeeding.mp4" type="video/mp4"/>
      </video>
      <div className={`${styles["person-one"]} ${styles["fade-in"]}`}>
        <Image src={personOne} height="600" width="220" alt="Person One" objectFit="cover"></Image>
      </div>
      <div className={`${styles["people"]} ${styles["fade-in"]}`}>
        <Image src={people} height="600" width="800" alt="People" objectFit="cover"></Image>
      </div>
      <div className={`${styles["person-two"]} ${styles["fade-in"]}`}>
        <Image src={personTwo} height="600" width="250" alt="Person Two" objectFit="cover"></Image>
      </div>
      <DialogueBox line={lines[count]}></DialogueBox>
    </div>
  );
}
