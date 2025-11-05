import MlGreeting from "../components/ml-components/MlGreeting";
import MlHeader from "../components/ml-components/MlHeader";
import MlBody from "../components/ml-components/MlBody";
import MlSignature from "../components/ml-components/MlSignautre";

const MotivationalLetterLayout: React.FC<MotivationalLetterProps> = ({
  motivationalLetter,
}) => {
  return (
    <div className="cv-container">
      {/* PAGE 1 */}
      <div className="debug-border relative">
        <MlHeader motivationalLetter={motivationalLetter} />
        <MlGreeting motivationalLetter={motivationalLetter} />
        <MlBody motivationalLetter={motivationalLetter} />
        <MlSignature motivationalLetter={motivationalLetter} />
      </div>
    </div>
  );
};

export default MotivationalLetterLayout;
