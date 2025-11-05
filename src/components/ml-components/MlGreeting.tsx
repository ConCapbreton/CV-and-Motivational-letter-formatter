const MlGreeting: React.FC<MotivationalLetterProps> = ({
  motivationalLetter,
}) => {
  const { lang, recipient } = motivationalLetter;

  const baseClasses = "font-sans text-[11pt] mb-3"; // Tailwind classes: Arial-like font, 11pt, margin-bottom

  // Custom greeting overrides everything
  if (recipient?.customGreeting)
    return <p className={baseClasses}>{recipient.customGreeting}</p>;

  const people = recipient?.people;

  if (people && people.length > 0) {
    // Map over all people to create the greeting
    const names = people.map((person) =>
      lang === "fr"
        ? person.gender === "male"
          ? `Monsieur ${person.lastName}`
          : `Madame ${person.lastName}`
        : person.gender === "male"
        ? `Mr. ${person.lastName}`
        : `Ms. ${person.lastName}`
    );

    const greetingText =
      lang === "fr" ? names.join(", ") + "," : `Dear ${names.join(", ")},`;

    return <p className={baseClasses}>{greetingText}</p>;
  }

  // Fallback generic greeting
  return (
    <p className={baseClasses}>
      {lang === "fr" ? "Madame, Monsieur," : "Dear Sir or Madam,"}
    </p>
  );
};

export default MlGreeting;
