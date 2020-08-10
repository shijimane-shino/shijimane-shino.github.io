import * as React from "react";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import * as Next from "next";

import { Item as ItemInterface } from "../../interfaces/item";

import { GraphQLClient } from "graphql-request";

import { Container, Header as H, Button, Image } from "semantic-ui-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faLine,
} from "@fortawesome/free-brands-svg-icons";

import Header from "../../components/header";
import Layout from "../../components/layout";
import Markdown from "../../components/markdown";

const ItemHeader: React.FC<ItemInterface> = (item) => {
  const urlTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    item.title
  )}&url=${encodeURIComponent(process.env.URL + "/items/" + item.id)}`;

  const urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    process.env.URL + "/items/" + item.id
  )}`;

  const urlLine = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    process.env.URL + "/items/" + item.id
  )}`;

  return (
    <>
      <div className="header-container">
        <div className="header-title">
          <H as="h1">{item.title}</H>
        </div>
        <div className="header-description">{item.description}</div>
        <div className="header-social-button">
          <a
            href={urlTwitter}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 .25em 0 0" }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" color="#1da1f2" />
          </a>
          <a
            href={urlFacebook}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 .25em 0 0" }}
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              color="#4267B2"
            />
          </a>
          <a
            href={urlLine}
            target="_blank"
            rel="noreferrer"
            style={{ margin: "0 .25em 0 0" }}
          >
            <FontAwesomeIcon icon={faLine} size="2x" color="#00c300" />
          </a>
        </div>
        <div className="header-download-button">
          {item.content.map((content) => (
            <Button key={content.id} href={content.url} target="_blank" primary>
              {content.title}
            </Button>
          ))}
        </div>
      </div>
      <style jsx>{`
        .header-container {
          min-height: 45vh;
          margin: 0 0 1em;
        }

        .header-title {
          width: 75%;
          margin: 0 0 1em;
          padding: 20vh 0 0;
        }

        .header-description {
          white-space: pre-wrap;
          margin: 0 0 1em;
        }

        .header-download-button {
          margin 0 0 .5em;
        }

        .header-social-button {
          margin 0 0 .5em;
        }
      `}</style>
    </>
  );
};

const BackgroundImage: React.FC<{
  url: string;
}> = (props) => (
  <>
    <div className="header-image">
      <Image
        src={props.url}
        style={{
          left: "50%",
          minWidth: "50%",
          minHeight: "100vh",
          objectFit: "contain",
        }}
      />
    </div>
    <style jsx>{`
      .header-image {
        position: relative;
        opacity: 0.5;
        height: 0;
        z-index: -1;
        overflow: inherit;
      }
    `}</style>
  </>
);

const Item: Next.NextPage<{
  item: ItemInterface | null;
}> = ({ item }) => {
  const router = useRouter();

  if (!item) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={item.title} isHeader={false}>
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            {item.thumbnail && <BackgroundImage url={item.thumbnail.url} />}
            <Header title={null} />
            <ItemHeader {...item} />
            <Markdown md={item.body.markdown} />
          </>
        )}
      </Container>
    </Layout>
  );
};

Item.getInitialProps = async (context: Next.NextPageContext): Promise<any> => {
  // const { id } = context.query;
  // const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

  // const data = await graphcms.request<{ item: ItemInterface | null }>(`
  //  query Item {
  //    item(where: {id: "${id}"}) {
  //      id
  //      createdAt
  //      updatedAt
  //      publishedAt
  //      title
  //      category
  //      description
  //      thumbnail {
  //        url
  //      }
  //      body {
  //        html
  //        markdown
  //      }
  //      content(orderBy: updatedAt_DESC) {
  //        id
  //        createdAt
  //        updatedAt
  //        publishedAt
  //        title
  //        url
  //      }
  //    }
  //  }
  // `);

  return {
    // item: data.item,
    item: null,
  };
};

export default Item;
