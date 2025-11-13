import { useEffect, useRef, useState } from "react";
import { sentencesModelArray } from "../../model/sentencesModel";

const SentenceWriterMV = () => {
  const [typedWord, setTypedWord] = useState("");
  const currentLetterIdx = useRef(0);
  const selectedSentence = useRef(0);
  const timeDelay = useRef(50);
  const timeToRead = 2000; //milliseconds
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const minTypeDelay = 70;
  const maxLetterVariation = 150;

  const chooseWord = () => {
    selectedSentence.current = Math.floor(
      Math.random() * sentencesModelArray.length
    );
    console.log(selectedSentence.current);
    setTypedWord("");

    currentLetterIdx.current = 0;
    timeoutRef.current = setTimeout(() => {
      addLetter();
    }, timeDelay.current);
  };

  useEffect(() => {
    chooseWord();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLetter = () => {
    timeDelay.current =
      minTypeDelay + Math.floor(Math.random() * maxLetterVariation);

    const sentence = sentencesModelArray[selectedSentence.current];

    const positionToAdd = currentLetterIdx.current;
    setTypedWord((perv) => perv + sentence[positionToAdd]);
    currentLetterIdx.current++;

    if (sentence.length === currentLetterIdx.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      currentLetterIdx.current = 0;
      setTimeout(() => chooseWord(), timeToRead);
      return;
    }
    timeoutRef.current = setTimeout(() => addLetter(), timeDelay.current);
  };

  return { chooseWord, typedWord };
};

export default SentenceWriterMV;
