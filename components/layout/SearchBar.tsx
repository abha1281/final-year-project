import React, { useState, Fragment } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Combobox, Transition } from "@headlessui/react";
import useFakeJs from "@/hooks/useFakeJs";

type Props = {};

const SearchBar = (props: Props) => {
  const { generateResults } = useFakeJs();
  const results = generateResults(25);
  const [selected, setSelected] = useState(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchField, setSearchField] = useState("");

  const searchForResults = (searchTerm = "") => {
    setSearchField(searchTerm);
    const filtered = results.filter(result =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(!searchTerm ? results : filtered);
  };

  return (
    <div className="relative">
      <Combobox value={selected} onChange={setSelected}>
        <div className="bg-cyan-900 px-3 py-2 rounded-md relative w-80">
          <MagnifyingGlassIcon className="w-4 h-4 text-white absolute top-3 left-3 pointer-events-none" />
          <Combobox.Input
            type="search"
            value={searchField}
            onChange={event => searchForResults(event.target.value)}
            className="bg-transparent outline-none text-white pl-6 w-full"
          />
        </div>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={searchForResults}
        >
          <Combobox.Options className="absolute top-12 w-full z-10 divide-y divide-cyan-100 max-h-96 overflow-y-auto shadow-lg">
            {searchResults.length > 0 ? searchResults.map(result => (
              <Combobox.Option
                value={result.title}
                key={result.id}
                className="bg-white hover:bg-cyan-100 transition-colors px-3 py-2 cursor-pointer"
              >
                <div>
                    <p className="text-sm font-medium">{result.title}</p>
                    <div className="text-sm flex gap-x-1 text-gray-500 truncate">
                    <p>{result.author}</p>
                    <p>{result.location}</p>
                    </div>
                </div>
              </Combobox.Option>
            )) : <p className="bg-white text-sm text-gray-900/50 font-medium px-3 py-2">No search found.</p>}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};

export default SearchBar;
