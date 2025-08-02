interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1400px] m-auto p-[20px]">{children}</div>;
};
export default Container;
