interface RightSideBarProps {
  children: React.ReactNode | React.ReactNode[];
}

const RightSideBar: React.FC<RightSideBarProps> = ({ children }) => {
  return <main className="w-[70%] flex flex-col gap-6">{children}</main>;
};

export default RightSideBar;
