import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return (
    <div className={`max-w-[1280px] mx-auto px-5 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
