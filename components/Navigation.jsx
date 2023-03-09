import { NavigationMenu } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

export function Navigation() {
  const { t } = useTranslation();
  return (
    <NavigationMenu
      navigationLinks={[
        {
          label: t("NavigationMenu.pageName"),
          destination: "/pagename",
        },
      ]}
    />
  );
}
