import type { NextPage } from "next";
import Head from "next/head";
import Index from "components/templates/Index";
import Button from "components/atoms/Button";
import Link from "components/atoms/Link";
import Heading from "components/atoms/Heading"

const Home: NextPage = () => {
  return (
    <>
      <Heading as="1">
      sdcioj
      </Heading>
      <Heading as="2">
      sdcioj
      </Heading>
      <Heading as="3">
      sdcioj
      </Heading>
      <Heading as="4">
      sdcioj
      </Heading>
      <Heading as="5">
      sdcioj
      </Heading>
      <Heading as="6">
      sdcioj
      </Heading>
      <Button label={"aaa"} color={"secondary"} />
      <Link href={"/hoge"}>
        <div>aaaM</div>
      </Link>
      <Button label={"aaa"} color={"secondary"} link={{ href: "sdchio" }} />
    </>
  );
};

export default Home;
