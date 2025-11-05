interface CvProfessionalExperienceProps {
  cv: CV;
  arrayStart?: number;
  arrayEnd?: number;
  showFooter?: boolean; // Optional footer message
}

const CvProfessionalExperience: React.FC<CvProfessionalExperienceProps> = ({
  cv,
  arrayStart,
  arrayEnd,
  showFooter = false,
}) => {
  const bulletLabel = cv.lang === "fr" ? "Réalisations" : "Achievements";

  // Determine which subset of experiences to show
  let experiences = cv.experience;
  if (arrayStart !== undefined && arrayEnd !== undefined) {
    experiences = cv.experience.slice(arrayStart, arrayEnd);
  } else if (arrayStart !== undefined) {
    experiences = cv.experience.slice(arrayStart);
  }

  // Determine title
  const title =
    arrayStart && arrayStart > 0
      ? cv.lang === "fr"
        ? "Expérience professionnelle (suite)"
        : "Professional Experience continued"
      : cv.lang === "fr"
      ? "Expérience professionnelle"
      : "Professional Experience";

  // Footer message
  const footerMessage =
    cv.lang === "fr"
      ? "Expérience professionnelle (suite sur la page suivante)"
      : "Professional Experience continued on the next page";

  return (
    <section>
      <h3 className="font-semibold mb-1">{title}</h3>

      <div className="space-y-6">
        {experiences.map((job, index) => (
          <div key={index}>
            {/* Line 1: Job Title — Company */}
            <h4 className="text-gray-900 font-bold">
              <span className="font-extrabold">{job.jobTitle}</span>{" "}
              <span className="font-semibold text-gray-700">
                — {job.company}
              </span>
            </h4>

            {/* Line 2: Location | Dates */}
            <div className="flex justify-between text-sm text-gray-600 italic mt-0.5">
              <span>{job.location}</span>
              <span className="whitespace-nowrap">
                {job.startYear} – {job.endYear}
              </span>
            </div>

            {/* Bullets */}
            <div className="mt-2">
              <p className="font-medium text-gray-800 mb-1">{bulletLabel}:</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Optional footer with extra spacing */}
      {showFooter && (
        <p className="mt-8 pt-2 border-t border-gray-300 text-sm italic text-gray-500">
          {footerMessage}
        </p>
      )}
    </section>
  );
};

export default CvProfessionalExperience;
