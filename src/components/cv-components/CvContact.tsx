import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaCar,
} from "react-icons/fa";

const CvContact: React.FC<CvProps> = ({ cv }) => {
  // Capitalize city/street for French CV
  const formattedCity =
    cv.lang === "fr" && cv.address.city
      ? cv.address.city.toUpperCase()
      : cv.address.city;

  const formattedAddress = [
    cv.address?.apartment,
    cv.address?.street,
    cv.address?.postcode,
    formattedCity,
    cv.address?.country,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <section>
      <h3 className="font-semibold mb-2">
        {cv.lang === "fr" ? "Coordonnées" : "Contact"}
      </h3>
      <ul className="text-sm space-y-1">
        {cv.phone && (
          <li className="flex items-center gap-2">
            <FaPhone className="shrink-0" /> {cv.phone}
          </li>
        )}
        {cv.email && (
          <li className="flex items-center gap-2">
            <FaEnvelope className="shrink-0" /> {cv.email}
          </li>
        )}
        {formattedAddress && (
          <li className="flex items-center gap-2">
            <FaHome className="shrink-0" /> {formattedAddress}
          </li>
        )}
        {cv.linkedIn && (
          <li className="flex items-center gap-2">
            <FaLinkedin className="shrink-0" />{" "}
            <a
              href={cv.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {cv.linkedIn.replace("https://www.", "")}
            </a>
          </li>
        )}
        {cv.website && (
          <li className="flex items-center gap-2">
            <FaGlobe className="shrink-0" />
            <a
              href={cv.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {cv.website.replace(/^https?:\/\//, "")}{" "}
              {/* display without protocol */}
            </a>
          </li>
        )}
        {cv.github && (
          <li className="flex items-center gap-2">
            <FaGithub className="shrink-0" />
            <a
              href={cv.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {cv.github.replace(/^https?:\/\//, "")}
            </a>
          </li>
        )}
        {cv.drivingLicense && (
          <li className="flex items-center gap-2">
            <FaCar className="shrink-0" />{" "}
            {cv.lang === "fr" ? "Permis B" : "Driving license"}
          </li>
        )}
      </ul>
    </section>
  );
};

export default CvContact;
