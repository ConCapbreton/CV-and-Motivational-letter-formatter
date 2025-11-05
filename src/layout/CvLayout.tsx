import CvHeader from "../components/cv-components/CvHeader";
import LeftSideBar from "../components/cv-components/LeftSideBar";
import RightSideBar from "../components/cv-components/RigthSideBar";
import CvContact from "../components/cv-components/CvContact";
import CvLanguages from "../components/cv-components/CvLanguages";
import CvProfessionalExperience from "../components/cv-components/CvProfessionalExperience";
import CvSkills from "../components/cv-components/CvSkills";
import SecondPage from "../components/cv-components/SecondPage";
import CvEducation from "../components/cv-components/CvEducation";
import CvOtherInformation from "../components/cv-components/CvOther";

const CvLayout: React.FC<CvProps> = ({ cv }) => {
  return (
    <div className="cv-container">
      {/* PAGE 1 */}
      <div className="debug-border relative">
        <CvHeader cv={cv} />

        <div className="flex w-full mt-6 gap-6 flex-nowrap items-start">
          <LeftSideBar>
            <CvContact cv={cv} />
            <CvLanguages cv={cv} />
            <CvSkills cv={cv} />
          </LeftSideBar>

          <RightSideBar>
            <CvProfessionalExperience
              cv={cv}
              arrayStart={0}
              arrayEnd={2}
              showFooter={true}
            />
          </RightSideBar>
        </div>
        <p className="absolute bottom-4 right-4 text-sm text-gray-500 print:text-xs">
          1/2
        </p>
      </div>

      {/* PAGE 2 */}
      <div className="debug-border relative mt-8">
        <SecondPage>
          <h2 className="text-lg font-semibold text-gray-900 print:text-base m-0 leading-tight">
            {cv.lang === "fr"
              ? `${cv.surname.toUpperCase()}, ${cv.name}`
              : `${cv.name} ${cv.surname}`}
          </h2>
          <CvProfessionalExperience cv={cv} arrayStart={2} />
          <div className="flex flex-row gap-8 mt-2">
            <div className="w-1/2">
              <CvEducation cv={cv} />
            </div>
            <div className="w-1/2">
              <CvOtherInformation cv={cv} />
            </div>
          </div>
          <footer className="text-center text-sm italic text-gray-500 mt-8 print:text-xs">
            {cv.lang === "fr"
              ? "Références disponibles sur demande."
              : "References available upon request."}
          </footer>
        </SecondPage>
        <p className="absolute bottom-4 right-4 text-sm text-gray-500 print:text-xs">
          2/2
        </p>
      </div>
    </div>
  );
};

export default CvLayout;
