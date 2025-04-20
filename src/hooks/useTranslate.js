import { useContext } from "react";
import { LanguageContext } from "../providers/LanguageProvider";

const useTranslate = () => {
  const { language, dictionary } = useContext(LanguageContext);

  return (key) => {
    const keys = key.split(".");
    let value = dictionary[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // fallback: trả lại chính key nếu không tìm thấy
      }
    }

    return typeof value === "string" ? value : key;
  };
};

export default useTranslate;
