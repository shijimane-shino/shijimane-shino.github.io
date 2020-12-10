import React from "react";
import * as Next from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

import * as graphcms from "../../utils/graphcms";
import { Container, Header as H, Button, Image } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";

const SocialButton: React.FC<graphcms.api.Item> = (item) => {
  const socialList = [
    {
      type: "twitter",
      icon: <FontAwesomeIcon icon={faTwitter} />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        item.title
      )}&url=${encodeURIComponent(process.env.URL + "/items/" + item.id)}`,
    },
    {
      type: "facebook",
      icon: <FontAwesomeIcon icon={faFacebookSquare} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        process.env.URL + "/items/" + item.id
      )}`,
    },
    {
      type: "line",
      icon: <FontAwesomeIcon icon={faLine} />,
      url: `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
        process.env.URL + "/items/" + item.id
      )}`,
    },
  ];

  return (
    <>
      {socialList.map((social) => (
        <Button
          circular
          key={social.type}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          icon={social.icon}
        />
      ))}
    </>
  );
};

const DownloadButton: React.FC<graphcms.api.Item> = (item) => (
  <>
    {item.content.map((content) => (
      <Button
        key={content.id}
        href={content.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.title}
      </Button>
    ))}
  </>
);

const ItemHeader: React.FC<graphcms.api.Item> = (item) => (
  <>
    <div className="header-container">
      <H as="h1">{item.title}</H>
      <div className="header-description">{item.description}</div>
      <div className="header-social-button">
        <SocialButton {...item} />
      </div>
      <div className="header-download-button">
        <DownloadButton {...item} />
      </div>
    </div>
    <style jsx>{`
      .header-container {
        min-height: 45vh;
        margin: 0 0 1em;
        padding: 20vh 0 0;
      }

      .header-description {
        white-space: pre-wrap;
        margin: 0 0 1em;
      }

      .header-social-button {
        margin: 0 0 1em;
      }
    `}</style>
  </>
);

const BackgroundImage: React.FC<{
  url: string;
}> = (props) => (
  <>
    <div className="header-image">
      <Image
        src={props.url}
        style={{
          minHeight: "100vh",
          objectFit: "contain",
        }}
      />
    </div>
    <style jsx>{`
      .header-image {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 0;
        opacity: 0.5;
        z-index: -1;
        overflow: inherit;
        left: 50%;
      }
    `}</style>
  </>
);

const Item: Next.NextPage<{
  item: graphcms.api.Item | null;
}> = ({ item }) => {
  const router = useRouter();

  if (!item) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout title={item.title} isHeaderTitleDisplay={false}>
        {item.thumbnail && <BackgroundImage url={item.thumbnail.url} />}
        <Container>
          <ItemHeader {...item} />
          <Markdown md={item.body.markdown} />
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: Next.GetStaticProps = async (context) => {
  const id: string | undefined = context.params?.id as string;

  return {
    props: {
      item: id
        ? await graphcms.api.item({
            where: {
              id: id,
            },
          })
        : null,
    },
  };
};

export const getStaticPaths: Next.GetStaticPaths = async () => ({
  paths: (await graphcms.api.items()).map(({ id }) => ({
    params: {
      id,
    },
  })),
  fallback: false,
});

export default Item;
