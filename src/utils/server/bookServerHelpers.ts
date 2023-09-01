import fs from "fs";
import { readFileAsync } from "./readFileAsync";
import { removeOrderPrefix } from "./removeOrderPrefix";

export const bookFolderPath = `${process.cwd()}/book`;

export interface Chapter {
  name: string;
  /**
   * Path to the chapter file in the file system
   * E.g. `/book/01-introduction/05-how-to-read-this-book.md`
   */
  path: string;
  /**
   * Slug is the path to the chapter file in the URL
   * E.g. `how-to-read-this-book`
   */
  slug: string;
}

export interface Section {
  name: string;
  /**
   * Path to the section folder in the file system
   * E.g. `/book/01-introduction`
   */
  path: string;
  /**
   * Slug is the path to the section folder in the URL
   * E.g. `introduction`
   */
  slug: string;
}

export const getSections = async (): Promise<Section[]> => {
  const sections = await fs.promises.readdir(bookFolderPath, {
    withFileTypes: true,
  });

  return (
    sections
      // filter out files
      .filter((section) => section.isDirectory())
      // map to object
      .map((section) => ({
        name: section.name,
        path: `${bookFolderPath}/${section.name}`,
        // transform format "xx-index" to "index"
        slug: removeOrderPrefix(section.name),
      }))
  );
};

export const getSectionPathBySlug = async (sectionSlug: string) => {
  const sections = await getSections();
  const section = sections.find((section) => section.slug === sectionSlug);

  if (!section) {
    throw new Error(`Section \`${sectionSlug}\` not found`);
  }

  return section.path;
};

export const getChapters = async (sectionPath: string) => {
  const chapters = await fs.promises.readdir(sectionPath, {
    withFileTypes: true,
  });

  return (
    chapters
      // Filter out files that are not .md
      // Also omit 01-index.md, which is the content of the section
      .filter(
        (chapter) =>
          chapter.isFile() &&
          chapter.name.endsWith(".md") &&
          chapter.name !== "01-index.md"
      )
      // map to object
      .map((chapter) => ({
        name: chapter.name,
        path: `${sectionPath}/${chapter.name}`,
        // transform format "xx-name.md" to "name"
        slug: removeOrderPrefix(chapter.name).replace(".md", ""),
      }))
  );
};

export const getChapterPathBySlug = async (
  sectionPath: string,
  chapterSlug: string
) => {
  console.log({
    sectionPath,
    chapterSlug,
  });
  const chapters = await getChapters(sectionPath);
  console.log({ chapters });
  const chapter = chapters.find((chapter) => chapter.slug === chapterSlug);
  console.log({ chapter });

  if (!chapter) {
    throw new Error(`Chapter \`${chapterSlug}\` not found`);
  }

  return chapter.path;
};

/**
 * Each section may or may not have 01-index.md file.
 * If it does, it will be the content of the section.
 */
export const getSectionContent = async (sectionPath: string) => {
  return await readFileAsync(`${sectionPath}/01-index.md`);
};

export const getChapterContent = async (chapterPath: string) => {
  return await readFileAsync(chapterPath);
};
