import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Developer`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="content content--canvas" style={{ zIndex: 1 }}>
        <div
          className="bio-info"
          style={{
            position: "absolute",
            zIndex: 4,
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "var(--color-gray-12)",
              fontSize: 36,
              fontWeight: 600,
              textAlign: "justify",
              maxWidth: 800,
              paddingLeft: 32,
              paddingRight: 32,
            }}
          >
            Hello 👋🏻 I'm Ajay. Here, I share my thoughts related to software
            development, law, politics, society, culture and economics. This is
            also a space where I document my processes related to development of
            mobile and web applications using TypeScript, Python, Elixir, React,
            react Native, Remix, Phoenix, PostgreSQL and Docker.
          </p>
        </div>
      </div>
      <Head>
        <script src="js/noise.min.js"></script>
        <script src="js/util.js"></script>
        {/* <script src="js/pipeline.js"></script> */}
        <script src="js/shift.js"></script>
      </Head>
    </Layout>
  );
}
