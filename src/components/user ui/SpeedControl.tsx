import { ChangeEvent } from "react";

const SpeedControl: React.FC<{
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}> = ({ onChange,value }) => {
  
  return (
    <div className="relative">
      <input type="range" defaultValue={0.01} max={100} min={0.01}  onChange={onChange} value={value} />
      <p className="font-semibold text-xl relative right-12 text-white">
        Change Speed by Sliding.
      </p>
    </div>
  );
};

export default SpeedControl;
