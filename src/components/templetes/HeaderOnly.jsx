import { Heardr } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Heardr />
      {children}
    </>
  );
};
