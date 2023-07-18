import { Body } from "./Body/Body";
import { SideMenu } from "./SideMenu/SideMenu";

const Container = () => {
  return (
    <div className="flex m-auto h-[90vh] items-center justify-center w-[85vw] my-10 rounded-xl overflow-hidden">
      <SideMenu />
      <Body />
    </div>
  );
};

export default Container;
