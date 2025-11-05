interface LeftSideBarProps {
  children: React.ReactNode | React.ReactNode[];
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ children }) => {
  return <aside className="w-[30%] flex flex-col gap-6">{children}</aside>;
};

export default LeftSideBar;
