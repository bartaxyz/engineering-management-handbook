import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Become the most impactful member of the team, without writing any code"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Theme accentColor="red" grayColor="slate">
          <Main />
          <NextScript />
        </Theme>
      </body>
    </Html>
  );
}
