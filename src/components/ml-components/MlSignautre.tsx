import React from "react";

interface MlSignatureProps {
  motivationalLetter: MotivationalLetter;
}

const MlSignature: React.FC<MlSignatureProps> = ({ motivationalLetter }) => {
  const { lang, name, surname, recipient, customSignature } =
    motivationalLetter;

  // Format name based on language
  const displayName =
    lang === "fr" ? `${name} ${surname.toUpperCase()}` : `${name} ${surname}`;

  // Use customSignature if provided
  if (customSignature) {
    return (
      <div className="mt-8 font-sans text-[11pt]">
        <p className="mb-6">{customSignature}</p>
        <p className="font-bold">{displayName}</p>
      </div>
    );
  }

  // Determine closing phrase
  let closing: string;

  if (lang === "fr") {
    const people = recipient?.people;
    if (people && people.length === 1) {
      // Single recipient → gendered closing
      closing =
        people[0].gender === "male"
          ? "Je vous prie d’agréer, Monsieur, l’expression de mes salutations distinguées."
          : "Je vous prie d’agréer, Madame, l’expression de mes salutations distinguées.";
    } else {
      // Multiple recipients or unknown → simpler closing
      closing = "Cordialement,";
    }
  } else {
    // English
    closing = "Sincerely,";
  }

  return (
    <div className="mt-8 font-sans text-[11pt]">
      <p className="mb-6">{closing}</p>
      <p className="font-bold">{displayName}</p>
    </div>
  );
};

export default MlSignature;
