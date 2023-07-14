import { ManfredAwesomicCV } from '@/model';
import { removeInvalidChars } from './json-parse.business';
import { generateExperiencieSection, generateProfileSection, generateStudiesSection } from './md-parts';

// TODO: check whether to move to common manfred library
export const parseStringToManfredJSon = (manfredJsonContent: string): ManfredAwesomicCV => {
  const cleanedContent = removeInvalidChars(manfredJsonContent);
  return JSON.parse(cleanedContent);
};

// TODO: Check whether download should be included here
// maybe not, why? because maybe you just want to show it online
export const exportManfredJSonToMarkdown = (manfredJsonContent: ManfredAwesomicCV): string => {
  const experienceSection = generateExperiencieSection(manfredJsonContent);
  const profileSection = generateProfileSection(manfredJsonContent);
  const studySection = generateStudiesSection(manfredJsonContent);

  return `${profileSection}
${experienceSection}
${studySection}
`;
};