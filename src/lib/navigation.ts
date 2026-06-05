import type { HomeSection } from '../components/sections/homeSections';

type NavLink = {
  label: string;
  href: string;
};

export const getNavLinks = (
  sections: HomeSection[],
  homeHref: string
): NavLink[] =>
  sections.map((section) => ({
    label: section.label,
    href: `${homeHref}#${section.id}`,
  }));
