import React from "react";
import Layout from "../components/Layout";
import DynamicComponent from "../components/DynamicComponent";

import { useStoryblok } from "../utils/storyblok";

export default function Page404({ preview, locale, locales, defaultLocale }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // const enableBridge = preview; // load only inside preview mode
  const storyLoaded = useStoryblok(null, enableBridge, locale);

  let content = <h1>Not found</h1>;

  if (storyLoaded && storyLoaded.content)
    content = <DynamicComponent blok={storyLoaded.content} />;

  return (
    <Layout locale={locale} locales={locales} defaultLocale={defaultLocale}>
      {content}
    </Layout>
  );
}

export async function getStaticProps({
  locale,
  locales,
  defaultLocale,
  preview = false,
}) {
  return {
    props: {
      preview,
      locale,
      locales,
      defaultLocale,
    },
  };
}
