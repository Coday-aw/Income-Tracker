interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="py-10 ">{children}</div>;
};
export default Layout;
