import { useEffect, useRef, useState } from "react";

const UseSentenceWriter = (
  sentencesArray: string[],
  deleteAble: boolean = false,
  grandmaMode: boolean = false
) => {
  const [typedWord, setTypedWord] = useState("");
  const [isBreathing, setIsBreathing] = useState(false);
  const [wordFinished, setWordFinished] = useState(false);

  const currentLetterIdx = useRef(0);
  const selectedSentence = useRef(0);
  const timeDelay = useRef(50);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeoutBreatheRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const minTypeDelay = grandmaMode ? 800 : 30;
  const maxLetterVariation = grandmaMode ? 1200 : 150;
  const timeToRead = 2000; //milliseconds
  const breathDelay = 350;

  const chooseWord = () => {
    if (selectedSentence.current >= sentencesArray.length) return;
    setIsBreathing(false);
    console.log(selectedSentence.current);
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
    breathe();
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
    setTypedWord((prev) => prev + sentence[positionToAdd]);

    currentLetterIdx.current++;
    timeoutBreatheRef.current = setTimeout(() => breathe(), breathDelay);
    if (sentence.length === currentLetterIdx.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setWordFinished(true);
      if (deleteAble) {
        timeoutRef.current = setTimeout(() => removeLetter(), timeToRead);
        return;
      }

      timeoutRef.current = setTimeout(() => wordAndSpace(), timeToRead);
      return;
    }

    timeoutRef.current = setTimeout(() => addLetter(), timeDelay.current);
  };
  const wordAndSpace = () => {
    selectedSentence.current++;
    setTypedWord("");

    chooseWord();
  };
  const removeLetter = () => {
    stopBreathing();
    timeDelay.current = minTypeDelay;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (timeoutBreatheRef.current) clearTimeout(timeoutBreatheRef.current);

    setTypedWord((prev) => prev.slice(0, -1));
    currentLetterIdx.current--;
    timeoutBreatheRef.current = setTimeout(() => breathe(), breathDelay);
    if (0 === currentLetterIdx.current) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      currentLetterIdx.current = 0;
      timeoutRef.current = setTimeout(() => chooseWord(), timeToRead);
      return;
    }

    timeoutRef.current = setTimeout(() => removeLetter(), timeDelay.current);
  };

  const words = (index: number, sentence: string) => {
    if (selectedSentence.current === index) return typedWord;
    if (selectedSentence.current > index) return sentence;

    return "";
  };
  return {  wordFinished, isBreathing, selectedSentence,words };
};

export default UseSentenceWriter;
