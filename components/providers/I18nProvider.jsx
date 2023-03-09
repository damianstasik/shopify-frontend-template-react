import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { Suspense, useEffect } from "react";
import { Loading, useLocale } from "@shopify/app-bridge-react";

export function I18nProvider({ children }) {
  const locale = useLocale();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </I18nextProvider>
  );
}
