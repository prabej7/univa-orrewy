import { Checkbox } from "../ui/checkbox";

interface Props {
    onToggle: (value: boolean) => void;
}

const OptionsToShow: React.FC<Props> = ({ onToggle }) => {
    return <>
        <div className=" w-screen p-6  absolute bottom-12  z-10" >
            <div className="flex items-center gap-3" >
                <Checkbox onCheckedChange={onToggle} />
                <p className="text-white" >Near Earth Object and PHAs</p></div>
        </div>
    </>
};

export default OptionsToShow;