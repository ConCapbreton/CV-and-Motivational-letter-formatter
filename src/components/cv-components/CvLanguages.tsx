import { FaGlobe } from "react-icons/fa";

const CvLanguages: React.FC<CvProps> = ({ cv }) => {
  if (!cv.languages || cv.languages.length === 0) return null;

  return (
    <section>
      <h3 className="font-semibold mb-2">
        {cv.lang === "fr" ? "Langues" : "Languages"}
      </h3>
      <ul className="text-sm space-y-2">
        {cv.languages.map((lang) => (
          <li key={lang.label} className="flex items-center gap-2">
            <FaGlobe className="shrink-0" />
            <span>
              {lang.label} — {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CvLanguages;
