import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color={"var(--main-active-color)"}
      ariaLabel="three-circles-loading"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    />
  );
};
