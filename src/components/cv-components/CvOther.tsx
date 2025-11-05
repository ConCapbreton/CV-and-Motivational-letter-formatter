import React from "react";

const CvOtherInformation: React.FC<{ cv: CV }> = ({ cv }) => {
  if (!cv.other || cv.other.length === 0) return null;

  const title = cv.lang === "fr" ? "Autres informations" : "Other Information";

  return (
    <section>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {cv.other.map((item, index) => (
          <li key={index}>
            <p className="font-medium text-gray-900">
              {item.title}
              {item.year && (
                <span className="text-gray-600"> — {item.year}</span>
              )}
            </p>
            <p className="text-gray-700">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CvOtherInformation;
