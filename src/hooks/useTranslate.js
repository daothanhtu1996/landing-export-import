import { useLanguage } from "../context/LanguageContext";
import LANG from "../lang";

const useTranslate = () => {
  const { lang } = useLanguage();

  return (key) => LANG[lang]?.[key] || key;
};

export default useTranslate;
