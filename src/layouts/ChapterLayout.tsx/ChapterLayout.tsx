import { Container } from "@radix-ui/themes";
import { FC, PropsWithChildren } from "react";

interface ChapterLayoutProps extends PropsWithChildren {}

export const ChapterLayout: FC<ChapterLayoutProps> = ({ children }) => {
  return <Container size="2">{children}</Container>;
};
