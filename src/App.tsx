import { useState } from "react";

import CvLayout from "./layout/CvLayout";
import MotivationalLetterLayout from "./layout/MotivationalLetterLayout";

import { UIMMCv as cv, UIMMML as ml } from "./applications/UIMM";

function App() {
  const [viewCV, setViewCV] = useState(true);

  return (
    <main className="cv-container bg-white text-gray-800 flex flex-col items-center px-4">
      {/* Button */}
      <button
        className="
          px-6 py-2
          bg-blue-600 text-white
          font-semibold
          rounded-md
          shadow-sm
          hover:bg-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          transition-colors duration-200
          my-6
        "
        onClick={() => setViewCV((prev) => !prev)}
      >
        {viewCV ? "See Motivational Letter" : "See CV"}
      </button>

      {/* Layouts */}
      <div className="w-full max-w-[210mm] flex justify-center">
        {viewCV ? (
          <CvLayout cv={cv} />
        ) : (
          <MotivationalLetterLayout motivationalLetter={ml} />
        )}
      </div>
    </main>
  );
}

export default App;
