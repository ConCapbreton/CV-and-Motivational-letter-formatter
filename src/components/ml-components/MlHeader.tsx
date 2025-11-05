const MlHeader: React.FC<MotivationalLetterProps> = ({
  motivationalLetter,
}) => {
  const {
    lang,
    name,
    surname,
    phone,
    email,
    address,
    linkedIn,
    website,
    github,
    companyAddress,
    jobTitle,
    customLetterSubject,
  } = motivationalLetter;

  // Display name formatting
  const displayName =
    lang === "fr" ? `${name} ${surname.toUpperCase()}` : `${name} ${surname}`;

  // Format city based on language
  const formatCity = (city: string) =>
    lang === "fr" ? city.toUpperCase() : city;

  // Helper to format addresses
  const formatAddress = (addr: {
    apartment?: string;
    street?: string;
    postcode: string;
    city: string;
    country?: string;
  }) => {
    const lines: string[] = [];
    if (addr.apartment) lines.push(addr.apartment);
    if (addr.street) lines.push(addr.street);
    lines.push(`${addr.postcode} ${formatCity(addr.city)}`);
    if (addr.country) lines.push(addr.country);
    return lines;
  };

  const personalAddressLines = formatAddress(address);
  const companyAddressLines = formatAddress(companyAddress);

  // Format today's date with applicant's city
  const today = new Date();
  const applicantCity = formatCity(address.city);
  const formattedDate =
    lang === "fr"
      ? `${applicantCity}, le ${today.getDate()} ${today.toLocaleString(
          "fr-FR",
          { month: "long" }
        )} ${today.getFullYear()}`
      : `${applicantCity}, ${today.toLocaleString("en-US", {
          month: "long",
        })} ${today.getDate()}, ${today.getFullYear()}`;

  // Subject line with prefix + optional custom content
  const subjectLinePrefix = lang === "fr" ? "Objet: " : "Subject: ";
  const subjectLineContent = customLetterSubject
    ? customLetterSubject
    : lang === "fr"
    ? `Candidature pour le poste ${jobTitle}`
    : `Application for the position ${jobTitle}`;
  const subjectLine = `${subjectLinePrefix}${subjectLineContent}`;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        whiteSpace: "pre-line",
        fontSize: "11pt",
        marginBottom: "1em",
      }}
    >
      {/* Personal Address */}
      <div style={{ marginBottom: "0.8em" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "12pt",
            marginBottom: "0.2em",
          }}
        >
          {displayName}
        </div>
        {personalAddressLines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <div style={{ marginTop: "0.2em" }}>{email}</div>
        <div>{phone}</div>
        {linkedIn && <div>LinkedIn: {linkedIn}</div>}
        {website && <div>Website: {website}</div>}
        {github && <div>GitHub: {github}</div>}
      </div>

      {/* Company Address */}
      <div style={{ marginBottom: "0.8em" }}>
        <div style={{ fontWeight: "bold" }}>{companyAddress.name}</div>
        {companyAddress.department && <div>{companyAddress.department}</div>}
        {companyAddressLines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>

      {/* Date */}
      <div style={{ marginBottom: "0.8em" }}>{formattedDate}</div>

      {/* Optional separator */}
      <hr style={{ borderTop: "1px solid #000", margin: "0.3em 0" }} />

      {/* Subject / Job title */}
      <div style={{ fontWeight: "bold", marginBottom: "1em" }}>
        {subjectLine}
      </div>
    </div>
  );
};

export default MlHeader;
