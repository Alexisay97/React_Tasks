import React, { useEffect, useState } from "react";

interface TabConfig {
  label: string;
  icon?: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabConfig[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [loadedTabs, setLoadedTabs] = useState(new Set<number>());
  const [initial, setInitial] = useState<boolean>(true);

  useEffect(() => {
    if(initial){
      setInitial(false);
      setActiveTab(0);
      setLoadedTabs((prev) => new Set(prev).add(0));
    }
  }, [initial])

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setLoadedTabs((prev) => new Set(prev).add(index));
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          {tabs.map((tab, index) => (
            <li key={index} className="me-2" role="presentation">
              <button
                type="button"
                onClick={() => handleTabChange(index)}
                className={`flex items-center space-x-2 p-4 border-b-2 rounded-t-lg ${
                  activeTab === index
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
                role="tab"
                aria-selected={activeTab === index}
              >
                {tab.icon && (
                  <span className="mr-1">
                    <i className={`${tab.icon}`}>Permisos rol</i>
                  </span>
                )}
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              display: activeTab === index ? "block" : "none",
            }}
          >
            {loadedTabs.has(index) ? tab.content : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
