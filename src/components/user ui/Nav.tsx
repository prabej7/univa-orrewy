import SearchBox from "./SearchBox";
import Menu from "./Menu";
import { useState } from "react";

const Nav: React.FC<{ on3DView: (position: { x: number; y: number; z: number },name:string) => void,onReadMore?: number, onClose: () => void }> = ({ on3DView,onReadMore, onClose }) => {
  const [_, setSearchBoxOpen] = useState(false);

  document.addEventListener("keydown", (e) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault();
      setSearchBoxOpen(true);
    }
    if (e.key === "Escape") {
      setSearchBoxOpen(false);
    }
  });

  return (
    <>
      {/* {searchBoxOpen && <SearchBox onClose={() => setSearchBoxOpen(false)} />} */}
      <div className="absolute top-0 left-0 z-10 p-10 flex items-center justify-between w-full gap-2">
        <div className="flex items-center gap-2">
          <div className="text-5xl">🌍</div>
          <div>
            <h1 className="text-white text-2xl font-black">UNIVA ORREWY</h1>
            <p className="text-white font-light text-sm">
              Explore the cosmos from your screen
            </p>
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-12">
            <li
              onClick={() => setSearchBoxOpen(true)}
              className="cursor-pointer"
            >
              <SearchBox on3DView={on3DView} />
            </li>

            <li className="cursor-pointer">
              {/* <div className="text-white flex items-center gap-2">
                Menu <Menu className="w-4 h-4" />
              </div> */}
              <Menu on3DView={on3DView} onReadMore={onReadMore} onClose={onClose} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
