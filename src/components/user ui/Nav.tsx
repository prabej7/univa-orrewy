import SearchBox from "./SearchBox";
import Menu from "./Menu";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
const Nav: React.FC<{
  on3DView: (
    position: { x: number; y: number; z: number },
    name: string
  ) => void;
  onReadMore?: number;
  onClose: () => void;
  onKepler: () => void;
}> = ({ on3DView, onReadMore, onClose, onKepler }) => {


  document.addEventListener("keydown", (e) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault();
      
    }

  });

  return (
    <>
      {/* {searchBoxOpen && <SearchBox onClose={() => setSearchBoxOpen(false)} />} */}

      <div className="absolute top-0 left-0 z-10 p-10 flex justify-between w-full gap-2 ">
        <div className="flex items-center gap-2">
          <div className="text-5xl">🌍</div>
          <div>
            <h1 className="text-white text-2xl font-black">UNIVA ORRERY</h1>
            <p className="text-white font-light text-sm">
              Explore the cosmos from your screen.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" onChange={onKepler}  onClick={onKepler} />
          <Label htmlFor="airplane-mode" className="text-white">
            Kepler's Mode
          </Label>
        </div>
        <div>
          <ul className="flex items-center gap-12">
            <li
              className="cursor-pointer"
            >
              <SearchBox on3DView={on3DView} />
            </li>

            <li className="cursor-pointer">
              {/* <div className="text-white flex items-center gap-2">
                Menu <Menu className="w-4 h-4" />
              </div> */}
              <Menu
                on3DView={on3DView}
                onReadMore={onReadMore}
                onClose={onClose}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
