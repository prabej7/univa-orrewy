import DemoModel, {
  CometDemoModel,
  EarthDemoModel,
  MoonDemoModel,
  SatteliteDemoModel,
  SaturnDemoModel,
} from "./DemoModel";

const ShowDemoModel: React.FC<{
  type: "earth" | "saturn" | "comet" | "sattelite" | "sun" | "planet" | "moon";
  texture: string;
}> = ({ type, texture }) => {
  return (
    <>
      {type === "earth" && <EarthDemoModel />}
      {type === "saturn" && <SaturnDemoModel />}
      {type === "comet" && <CometDemoModel texture={texture} />}
      {type === "planet" && <DemoModel texture={texture} />}
      {type === "sattelite" && <SatteliteDemoModel texture={texture} />}
      {type === "moon" && (
        <>
          <MoonDemoModel />
        </>
      )}
      {type === "sun" && <DemoModel texture={texture} />}
    </>
  );
};

export default ShowDemoModel;
