const CvSkills: React.FC<{ cv: CV }> = ({ cv }) => {
  if (!cv.skills || cv.skills.length === 0) return null;

  const sectionTitle = cv.lang === "fr" ? "Compétences" : "Skills";

  const technicalSkills = cv.skills.filter((s) => s.type === "technical");
  const softSkills = cv.skills.filter((s) => s.type === "soft");

  return (
    <section>
      <h3 className="font-semibold mb-2">{sectionTitle}</h3>

      {technicalSkills.length > 0 && (
        <div className="mb-2">
          <p className="font-medium text-gray-800 text-sm mb-1">
            {cv.lang === "fr" ? "Techniques / Outils" : "Technical / Tools"}
          </p>
          <ul className="flex flex-wrap gap-1 text-sm">
            {technicalSkills.map((skill, idx) => (
              <li
                key={idx}
                className="px-1 py-0.5 rounded border border-gray-300 bg-gray-100 text-black text-xs font-medium"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {softSkills.length > 0 && (
        <div>
          <p className="font-medium text-gray-800 text-sm mb-1">
            {cv.lang === "fr" ? "Compétences générales" : "Soft Skills"}
          </p>
          <ul className="flex flex-wrap gap-1 text-sm">
            {softSkills.map((skill, idx) => (
              <li
                key={idx}
                className="px-1 py-0.5 rounded border border-gray-300 bg-gray-100 text-black text-xs font-medium"
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CvSkills;
