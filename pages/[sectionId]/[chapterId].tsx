import { Markdown } from "@/src/components/Markdown";
import { ChapterLayout } from "@/src/layouts/ChapterLayout.tsx/ChapterLayout";
import { getTitle } from "@/src/utils/common/getTitle";
import {
  getChapterContent,
  getChapterPathBySlug,
  getChapters,
  getSectionPathBySlug,
  getSections,
} from "@/src/utils/server/bookServerHelpers";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

type ChapterProps = {
  section: {
    title: string;
  };
  chapter: {
    content: string;
    title: string;
  };
};

type ChapterParams = {
  sectionId: string;
  chapterId: string;
};

export const getStaticPaths: GetStaticPaths<ChapterParams> = async () => {
  const paths: GetStaticPathsResult<ChapterParams>["paths"] = [];
  const sectionFolders = await getSections();

  await Promise.all(
    sectionFolders.map(async (section) => {
      const chapterFiles = await getChapters(section.path);

      return chapterFiles.map((chapterFile) => {
        paths.push({
          params: {
            sectionId: section.slug,
            chapterId: chapterFile.slug,
          },
        });
      });
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ChapterProps,
  ChapterParams
> = async ({ params }) => {
  const sectionPath = await getSectionPathBySlug(params!.sectionId);
  const chapterPath = await getChapterPathBySlug(
    sectionPath,
    params!.chapterId
  );
  const content = await getChapterContent(chapterPath);

  return {
    props: {
      section: {
        title: "",
      },
      chapter: {
        content: content,
        title: "",
      },
    },
  };
};

const Chapter: NextPageWithLayout<ChapterProps> = ({ chapter }) => {
  return (
    <>
      <Head>
        <title>{getTitle({ sectionName: chapter.title })}</title>
      </Head>

      <Markdown>{chapter.content}</Markdown>
    </>
  );
};

Chapter.getLayout = function getLayout(page: ReactElement) {
  return <ChapterLayout>{page}</ChapterLayout>;
};

export default Chapter;
