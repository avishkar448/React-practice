//Create a localization system using useContext to provide translation for entire app

import React from "react";
import { useLocal } from "../context/LocalizationContext";

const TweentySix = () => {
  const { setLocale, translate } = useLocal();

  const handleLocalChange = (newLocal) => {
    setLocale(newLocal);
  };
  return (
    <div>
      <h1>{translate("greeting")}</h1>
      <h1>{translate("welcome")}</h1>
      <button
        onClick={() => handleLocalChange("en")}
        className="bg-orange-300 p-1 m-2"
      >
        English
      </button>
      <button
        onClick={() => handleLocalChange("es")}
        className="bg-orange-300 p-1 m-2"
      >
        Espanol
      </button>
    </div>
  );
};

export default TweentySix;
