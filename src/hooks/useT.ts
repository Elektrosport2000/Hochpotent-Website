import { useLang } from '../context/LanguageContext';
import { translations } from '../data/translations';

export function useT() {
  const { lang } = useLang();
  return translations[lang];
}
