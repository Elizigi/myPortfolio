import { useEffect, useRef, useState } from "react";

const UseSentenceWriter = (
  sentencesArray: string[],
  grandmaMode: boolean = false
) => {
  const [typedWord, setTypedWord] = useState("");
  const [isBreathing, setIsBreathing] = useState(false);

  const currentLetterIdx = useRef(0);
  const selectedSentence = useRef(0);
  const timeDelay = useRef(50);
  const timeToRead = 2000; //milliseconds
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutBreatheRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const breathDelay = 350;
  const minTypeDelay = grandmaMode ? 800 : 30;
  const maxLetterVariation = grandmaMode ? 1200 : 150;

  const chooseWord = () => {
    selectedSentence.current = Math.floor(
      Math.random() * sentencesArray.length
    );
    setIsBreathing(false);
    console.log(selectedSentence.current);
    setTypedWord("");
    currentLetterIdx.current = 0;

    timeoutRef.current = setTimeout(() => {
      addLetter();
    }, timeDelay.current);
  };

  const breathe = () => {
    setIsBreathing(true);
  };

  const stopBreathing = () => {
    setIsBreathing(false);
  };

  useEffect(() => {
    chooseWord();
    breathe()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (timeoutBreatheRef.current) clearTimeout(timeoutBreatheRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLetter = () => {
    stopBreathing();
    timeDelay.current =
      minTypeDelay + Math.floor(Math.random() * maxLetterVariation);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timeoutBreatheRef.current) clearTimeout(timeoutBreatheRef.current);

    const sentence = sentencesArray[selectedSentence.current];

    const positionToAdd = currentLetterIdx.current;
    setTypedWord((perv) => perv + sentence[positionToAdd]);
    currentLetterIdx.current++;
    timeoutBreatheRef.current = setTimeout(() => breathe(), breathDelay);
    if (sentence.length === currentLetterIdx.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      currentLetterIdx.current = 0;
      setTimeout(() => chooseWord(), timeToRead);
      return;
    }

    timeoutRef.current = setTimeout(() => addLetter(), timeDelay.current);
  };

  return { typedWord, isBreathing };
};

export default UseSentenceWriter;
