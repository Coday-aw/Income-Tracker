interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}
export default Layout;
