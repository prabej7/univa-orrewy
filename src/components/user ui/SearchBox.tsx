import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Planets, Comets, Satellites } from "@/constants/data";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const SearchBox: React.FC<{
  on3DView: (
    position: { x: number; y: number; z: number },
    name: string
  ) => void;
}> = ({ on3DView }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const handleSearch = () => {
    const query = search.toLowerCase();
    let results = [
      ...Planets.filter((planet) => planet.name.toLowerCase() === query),
      ...Comets.filter((comet) => comet.name.toLowerCase() === query),
      ...Satellites.filter((satellite) => satellite.name.toLowerCase() === query),
    ];
    
    if (results.length === 0) {
      results = [
        ...Planets.filter((planet) => planet.name.toLowerCase().includes(query)),
        ...Comets.filter((comet) => comet.name.toLowerCase().includes(query)),
        ...Satellites.filter((satellite) => satellite.name.toLowerCase().includes(query)),
      ];
    }

    if (results.length === 0) {
      setResults([{ id: 'no-results', name: 'No results found' }]);
    } else {
      setResults(results.slice(0, 5)); // Limit to 5 results
    }
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault();
      setOpen(true);
    }
    if (e.key === "Escape") {
      setOpen(false);
      setSearch("");
      setResults([]);
    }
  });

  return (
    <>
      <Sheet
        open={open}
        onOpenChange={() => {
          setSearch("");
          setResults([]);
          setOpen(!open);
        }}
      >
        <SheetTrigger asChild>
          <div className="text-white flex items-center gap-2">
            Search <Search className="w-4 h-4" />
          </div>
        </SheetTrigger>
        <SheetContent
          side="top"
          className=" flex items-center justify-center flex-col backdrop-filter backdrop-blur-sm bg-opacity-30 bg-gray-800 h-screen w-screen"
        >
          <div>
            {results.length > 0 && search !== "" && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-6 mt-6 ab">
                  {results.map((result) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      <p
                        onClick={() => {
                          console.log(result);
                          on3DView(
                            {
                              x: result.x,
                              y: result.y,
                              z: result.z,
                            },
                            result.name
                          );
                          setOpen(false);
                          setSearch("");
                          setResults([]);
                        }}
                        className="text-slate-400 hover:text-black cursor-pointer transition-all duration-150 font-light"
                      >
                        {result.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: results.length > 0 ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div className="flex items-center gap-2">
              <Input
                autoFocus
                placeholder="Search"
                className=" text-white placeholder:text-slate-400 font-light w-72"
                onChange={(e) => {
                  setSearch(e.target.value);
                  handleSearch();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              <Button
                className="flex items-center gap-2"
                variant="outline"
                onClick={handleSearch}
              >
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-slate-400 text-sm text-center mt-3">
                Search to explore the universe.
              </p>
            </div>
            <div>
              <p className="text-slate-400 text-sm text-center relative top-48">
                Ctrl + K to open search.
              </p>
            </div>
          </motion.div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SearchBox;
