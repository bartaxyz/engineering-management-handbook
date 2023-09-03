import { Container } from "@radix-ui/themes";
import { FC, PropsWithChildren } from "react";

interface SectionLayoutProps extends PropsWithChildren {
  sectionName: string;
}

export const SectionLayout: FC<SectionLayoutProps> = ({
  children,
  sectionName,
}) => {
  return <Container size="2">{children}</Container>;
};
