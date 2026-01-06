import { useEffect, useState } from "react";
import { getTechLogos } from "../../utils/images/coverimage";
import { cn } from "@/lib/utils";

const DisplayTechIcons = ({ techStack }) => {
  const [techIcons, setTechIcons] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadIcons() {
      const icons = await getTechLogos(techStack);
      if (active) {
        setTechIcons(icons);
      }
    }

    if (Array.isArray(techStack) && techStack.length > 0) {
      loadIcons();
    }

    return () => {
      active = false;
    };
  }, [techStack]);

  return (
    <div className="flex flex-row gap-2">
      {techIcons.slice(0, 3).map(({ tech, url },index) => (
        <div
          key={tech}
          className={cn("relative group bg-dark-300 rounded-full p-2 flex items-center justify-center", index>=1 && '-ml-3')}
        >
          <img
            src={url}
            alt={tech}
            className="size-5 object-contain"
          />

          <span className="tech-tooltip">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DisplayTechIcons;
