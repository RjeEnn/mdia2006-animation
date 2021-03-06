import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import DialogueBox from "../../components/dialogueBox";
import SceneTwoLines from "../../script/sceneTwo";
import styles from "../../styles/SceneTwo.module.css";
import Image from 'next/image';
import Router from "next/router";

export async function getStaticProps() {
  const lines = SceneTwoLines();

  return {
    props: {
      lines,
    },
  };
}

export default function SceneOne({ lines }) {
  const [count, setCount] = useState(0);
  const [personOne, setPersonOne] = useState('/images/blank.png')
  const [personTwo, setPersonTwo] = useState('/images/blank.png')
  const [bgClass, setBgClass] = useState("bg-rowan");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const handleCount = () => {
      if (count == 0) {
        return "bg-rowan";
      } else if (count == 1) {
        setPersonOne('/images/rowan-call.png')
        return "bg-rowan";
      } else if (count == 2) {
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/jon-confused.png')
        return "bg-jon"
      } else if (count == 3) {
        setPersonOne('/images/rowan-call-happy.png')
        setPersonTwo('/images/jon-listening.png')
      } else if (count == 4) {
        setPersonOne('/images/rowan-listen.png')
        setPersonTwo('/images/jon-talking-phone.png')
      } else if (count == 5) {
        setPersonOne('/images/rowan-call.png')
        setPersonTwo('/images/jon-listening.png')
      } else if (count == 6) {
        setPersonOne('/images/rowan-listen.png')
        setPersonTwo('/images/jon-phone-happy.png')
      } else if (count == 7) {
        setPersonTwo('/images/jon-talking-phone.png')
      } else if (count == 8) {
        setPersonOne('/images/rowan-call.png')
        setPersonTwo('/images/jon-listening.png')
      } else if (count == 9) {
        setPersonOne('/images/rowan-listen.png')
        setPersonTwo('/images/jon-talking-phone.png')
      } else if (count == 10) {
        setPersonOne('/images/rowan-call.png')
        setPersonTwo('/images/jon-listening.png')
      } else if (count == 11) {
        setPersonOne('/images/rowan-determined.png')
        setPersonTwo('/images/blank.png')
        return "bg-rowan"
      } else if (count == 12) {
        setPersonOne('/images/blank.png')
        return "bg-rowan"
      } else if (count == 13) {
        setDisabled(true)
        setPersonTwo('/images/blank.png')
        Router.push('/scene/three')
      }
      return "bg-jon-and-rowan";
    };

    setBgClass(handleCount());
  }, [count]);

  return (
    <div
      className={`${styles.container} ${styles[bgClass]} ${disabled ? styles["disable-click"] : ''}`}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <Head>
        <title>Scene Two</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio src="/music/sceneTwo.mp3" autoPlay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
        <embed src="/music/sceneTwo.mp3" width="180" height="90" hidden={true} />
      </audio>
      <div className={`${styles["person-one"]} ${styles["fade-in"]}`}>
        <Image src={personOne} height="600" width="250" alt="Person One" objectFit="cover"></Image>
      </div>
      <div className={`${styles["person-two"]} ${styles["fade-in"]}`}>
        <Image src={personTwo} height="600" width="250" alt="Person Two" objectFit="cover"></Image>
      </div>
      <DialogueBox line={lines[count]}></DialogueBox>
    </div>
  );
}
