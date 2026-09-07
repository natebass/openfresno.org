import Projects from "./projects.jsx";
import { githubOwner } from "@/utility/constants/appData.js";

export default function Page() {
  return (
    <>
      <Projects githubOwner={githubOwner}></Projects>
    </>
  );
}
