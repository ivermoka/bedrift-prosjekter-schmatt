import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Discmenu({ selectedForum, setSelectedForum, refresh, setRefresh }) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    setRefresh(!refresh);
  };
  const panelClasses = `px-4 pt-4 pb-2 text-sm text-gray-500 hover:text-white ${
    isPanelOpen ? "bg-red-400" : ""
  }`;
  return (
    <div className="w-full px-4 pt-16">
      {selectedForum && <p>Selected forum: {selectedForum}</p>}
      <div className="mx-auto w-full max-w-md rounded-2xl">
      
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-xl font-medium text-[#FFF8F8] #FFF8F8 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Coding</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-[#FFF8F8]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className={panelClasses}>
                <a
                  onClick={() => {
                    setSelectedForum("s/CodingTips"), { togglePanel };

                  }}
                >
                  s/CodingTips
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a onClick={() => setSelectedForum("s/CodingNews")}>
                  s/CodingNews
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a
                  onClick={() => setSelectedForum("s/WebDevelopment")}
                >
                  s/WebDevelopment
                </a>
              </Disclosure.Panel>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a onClick={() => setSelectedForum("s/CodingHelp")}>
                  s/CodingHelp
                </a>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* Other forums... */}
      </div>
      
    </div>
  );
}
