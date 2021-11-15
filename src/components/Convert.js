import axios from "axios";
import React, { useState, useEffect } from "react";

const GOOGLE_TRANSLATE_API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const GOOGLE_TRANSLATE_API_URL =
  "https://translation.googleapis.com/language/translate/v2";
const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  useEffect(() => {
    const getTranslation = async () => {
      const { data } = await axios.post(
        GOOGLE_TRANSLATE_API_URL,
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: GOOGLE_TRANSLATE_API_KEY,
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    getTranslation();
  }, [language, debouncedText]);

  return (
    <div className="ui header">
      <h1>{translatedText}</h1>
    </div>
  );
};

export default Convert;
