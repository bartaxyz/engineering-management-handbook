import { Markdown } from "@/src/components/Markdown";
import { SectionLayout } from "@/src/layouts/SectionLayout/SectionLayout";
import { getTitle } from "@/src/utils/common/getTitle";
import {
  getSectionContent,
  getSectionPathBySlug,
  getSections,
} from "@serverUtils/bookServerHelpers";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

type SectionProps = {
  section: {
    content: string;
    title: string;
  };
};

type SectionParams = {
  sectionId: string;
};

export const getStaticPaths: GetStaticPaths<SectionParams> = async () => {
  const sectionFolders = await getSections();
  const paths = sectionFolders.map((section) => ({
    params: { sectionId: section.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  SectionProps,
  SectionParams
> = async ({ params }) => {
  const path = await getSectionPathBySlug(params!.sectionId);
  const content = await getSectionContent(path);

  return {
    props: {
      section: {
        content,
        title: "Introduction",
      },
    },
  };
};

const Section: React.FC<SectionProps> = ({ section }) => {
  return (
    <>
      <Head>
        <title>{getTitle({ sectionName: section.title })}</title>
      </Head>

      <SectionLayout sectionName={section.title}>
        <Markdown>{section.content}</Markdown>
      </SectionLayout>
    </>
  );
};

export default Section;
