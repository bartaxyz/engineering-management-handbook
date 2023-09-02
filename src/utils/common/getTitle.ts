export const DEFAULT_TITLE = "Engineering Management Handbook";

interface DefaultPageTitle {}
interface SectionPageTitle {
  sectionName: string;
}
interface ChapterPageTitle {
  sectionName: string;
  chapterName: string;
}

/**
 * Returns the title of the page based on the options provided
 * E.g. if you are on the section page, the title will be:
 * `Section Name | Engineering Management Handbook`
 */
export const getTitle = (
  options: DefaultPageTitle | SectionPageTitle | ChapterPageTitle
) => {
  if ("sectionName" in options) {
    return `${options.sectionName} | ${DEFAULT_TITLE}`;
  }

  if ("chapterName" in options && "sectionName" in options) {
    return `${options.chapterName} | ${options.sectionName} | ${DEFAULT_TITLE}`;
  }

  return DEFAULT_TITLE;
};
