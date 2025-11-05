interface SecondPageProps {
  children: React.ReactNode | React.ReactNode[];
}

const SecondPage: React.FC<SecondPageProps> = ({ children }) => {
  return (
    <div
      className="
        mt-0
        pt-0
        max-w-[210mm] mx-auto 
        bg-white 
        flex flex-col 
        gap-2
        min-h-[297mm]  /* A4 height */
        page-break-before:always
      "
    >
      {children}
    </div>
  );
};

export default SecondPage;
