import {
  getAuthorData,
  getEducation,
  getProjects,
  getWorkExperience,
} from "@/lib/data";
//import { portableTextToPlainText } from "@/lib/utils";
import PortfolioContent from "@/components/PortfolioContent";

export default async function Page() {
  const [author, work, education, projects] = await Promise.all([
    getAuthorData(),
    getWorkExperience(),
    getEducation(),
    getProjects(),
  ]);

  if (!author) return null;

  return (
    <PortfolioContent 
      author={author} 
      work={work} 
      education={education} 
      projects={projects}
      //portableTextToPlainText={portableTextToPlainText}
    />
  );
}