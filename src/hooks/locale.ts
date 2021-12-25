// import { useRouter } from 'next/router'
import t from "../locales/index";

export const useLocale = (locale?: string) => {
  // if (!locale) {
  //  locale = useRouter().locale;
  // }
  locale = "ja";

  return { locale, t: t.ja };
};
