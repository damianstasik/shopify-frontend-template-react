import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { Trans, useTranslation } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Text as="h2" variant="headingMd">
                    {t("HomePage.heading")}
                  </Text>
                  <p>
                    <Trans i18nKey="HomePage.yourAppIsReadyToExplore">
                      Your app is ready to explore! It contains everything you
                      need to get started including the{" "}
                      <Link url="https://polaris.shopify.com/" external>
                        Polaris design system
                      </Link>
                      ,{" "}
                      <Link
                        url="https://shopify.dev/api/admin-graphql"
                        external
                      >
                        Shopify Admin API
                      </Link>
                      , and{" "}
                      <Link
                        url="https://shopify.dev/apps/tools/app-bridge"
                        external
                      >
                        App Bridge
                      </Link>{" "}
                      UI library and components.
                    </Trans>
                  </p>
                  <p>{t("HomePage.startPopulatingYourApp")}</p>
                  <p>
                    <Trans i18nKey="HomePage.learnMore">
                      Learn more about building out your app in{" "}
                      <Link
                        url="https://shopify.dev/apps/getting-started/add-functionality"
                        external
                      >
                        this Shopify tutorial
                      </Link>{" "}
                      📚{" "}
                    </Trans>
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt={t("HomePage.trophyAltText")}
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
