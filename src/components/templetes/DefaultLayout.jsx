import { Footer } from "../atoms/layout/Footer";
import { Heardr } from "../atoms/layout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Heardr />
      {children}
      <Footer />
    </>
  );
};
