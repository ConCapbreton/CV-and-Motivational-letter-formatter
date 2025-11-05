const CvHeader: React.FC<CvProps> = ({ cv }) => {
  const displayName =
    cv.lang === "fr"
      ? `${cv.name} ${cv.surname.toUpperCase()}`
      : `${cv.name} ${cv.surname}`;
  return (
    <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Profile photo */}
      <div className="shrink-0 w-[30mm] h-[35mm] sm:w-36 sm:h-36 border-2 border-gray-300 rounded-lg overflow-hidden print:border-none">
        <img src={cv.profilePic} alt="Profile" className="object-cover" />
      </div>

      {/* Name, title, summary */}
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-1 leading-tight print:text-3xl">
          {displayName}
        </h1>
        <h2 className="text-xl text-gray-700 font-semibold mb-2 print:text-lg">
          {cv.jobTitle}
        </h2>
        <p className="text-gray-600 italic text-sm mb-2 print:text-xs">
          {cv.nationality}
        </p>
        <p className="text-gray-800 text-base leading-relaxed print:text-sm">
          {cv.proSummary}
        </p>
      </div>
    </header>
  );
};

export default CvHeader;
