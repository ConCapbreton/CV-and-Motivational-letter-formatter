const CvEducation: React.FC<{ cv: CV }> = ({ cv }) => {
  if (!cv.education || cv.education.length === 0) return null;

  const title = cv.lang === "fr" ? "Formation" : "Education";

  return (
    <section>
      <h3 className="font-semibold mb-4">{title}</h3>

      <div className="space-y-4">
        {cv.education.map((edu, index) => (
          <div key={index}>
            {/* Institute + Location */}
            <h4 className="font-bold text-gray-900">
              {edu.institute}
              {edu.city && edu.country
                ? ` — ${edu.city}, ${edu.country}`
                : edu.country
                ? ` — ${edu.country}`
                : ""}
            </h4>

            {/* Dates */}
            <div className="text-sm text-gray-600 italic">
              {edu.startYear} – {edu.endYear}
            </div>

            {/* Qualifications */}
            <ul className="list-disc list-inside mt-1 text-sm text-gray-800">
              {edu.qualification.map((q, i) => (
                <li key={i}>
                  {q.name}
                  {q.grade && (
                    <span className="text-gray-600"> — {q.grade}</span>
                  )}
                  {q.frenchEquivalent && (
                    <span className="text-gray-500 italic">
                      {" "}
                      ({q.frenchEquivalent})
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CvEducation;
