import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import DialogueBox from "../../components/DialogueBox";
import sceneFourLines from "../../script/sceneFour";
import styles from "../../styles/SceneFour.module.css";
import Image from 'next/image';
import Router from "next/router";

export async function getStaticProps() {
  const lines = sceneFourLines();

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
  const [people, setPeople] = useState('/images/blank.png')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    const handleCount = () => {
      if (count == 0) {
        return "bg-restaurant";
      } else if (count == 1) {
        setPersonOne('/images/jon-stand-confused.png')
        return "bg-restaurant";
      } else if (count == 2) {
        setPersonOne('/images/jon-stand-listening.png')
        setPersonTwo('/images/rowan-stand-talk.png')
        return "bg-restaurant";
      } else if (count == 3) {
        setPersonOne('/images/jon-stand-happy.png')
        setPersonTwo('/images/rowan-stand-listen.png')
        return "bg-restaurant";
      } else if (count == 4) {
        setPersonOne('/images/jon-stand-listening.png')
        setPersonTwo('/images/rowan-determined-flipped.png')
        return "bg-restaurant";
      } else if (count == 5) {
        setPersonOne('/images/jon-stand-talk.png')
        setPersonTwo('/images/rowan-stand-listen.png')
        return "bg-restaurant";
      } else if (count == 6) {
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/blank.png')
      } else if (count == 7) {
        setPersonOne('/images/gretta.png')
      } else if (count == 8) {
        setPeople('/images/rowan-stand-talk.png')
        setPersonTwo('/images/jon-stand-listening-f.png')
      } else if (count == 9) {
        setPeople('/images/rowan-stand-listen.png')
      } else if (count == 10) {
        setPeople('/images/rowan-determined-flipped.png')
      } else if (count == 11) {
        setPeople('/images/rowan-stand-listen.png')
      } else if (count == 14) {
        setPersonTwo('/images/jon-stand-confused-f.png')
      } else if (count == 15) {
        setPersonTwo('/images/jon-stand-listening-f.png')
      } else if (count == 16) {
        setPeople('/images/rowan-stand-talk.png')
      } else if (count == 17) {
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/blank.png')
        setPeople('/images/blank.png')
      } else if (count == 18) {
        setPersonTwo('/images/rowan-determined-flipped.png')
        return "bg-kitchen"
      } else if (count == 19) {
        setPersonOne('/images/jon-stand-talk.png')
        return "bg-kitchen"
      } else if (count == 20) {
        setPersonOne('/images/jon-stand-listening.png')
        setPersonTwo('/images/rowan-scared.png')
        return "bg-kitchen"
      } else if (count == 21) {
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/blank.png')
        setPeople('/images/rowan-cry.png')
        return "bg-kitchen"
      } else if (count == 22) {
        setDisabled(true)
        setPersonOne('/images/blank.png')
        setPersonTwo('/images/blank.png')
        Router.push('/end-screen')
        return "bg-kitchen"
      }
      return "bg-outside";
    };

    setBgClass(handleCount());
  }, [count]);

  const [bgClass, setBgClass] = useState("bg-office");

  return (
    <div
      className={`${styles.container} ${styles[bgClass]} ${disabled ? styles["disable-click"] : ''}`}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <Head>
        <title>Scene Four</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio src="/music/sceneFour.mp3" autoPlay loop>
        <p>If you are reading this, it is because your browser does not support the audio element.</p>
        <embed src="/music/sceneFour.mp3" width="180" height="90" hidden={true} />
      </audio>
      <div className={`${styles["person-one"]} ${styles["fade-in"]}`}>
        <Image src={personOne} height="900" width="500" alt="Person One" objectFit="cover"></Image>
      </div>
      <div className={`${styles["people"]} ${styles["fade-in"]}`}>
        <Image src={people} height="900" width="500" alt="People" objectFit="cover"></Image>
      </div>
      <div className={`${styles["person-two"]} ${styles["fade-in"]}`}>
        <Image src={personTwo} height="1000" width="500" alt="Person Two" objectFit="cover"></Image>
      </div>
      <DialogueBox line={lines[count]}></DialogueBox>
    </div>
  );
}
