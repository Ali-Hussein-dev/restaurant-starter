import * as React from "react";

//======================================
export const Tabs = ({
  tabButtons,
  panels,
}: {
  tabButtons: { label: string }[];
  panels: React.ReactNode[];
}) => {
  const [activeTab, setActiveTab] = React.useState(1);
  //======================================return
  return (
    <div className="container w-full pt-2 mx-auto mb-4 space-y-1">
      <div className="row-evenly md:row-center tabs tabs-boxed bg-base-100">
        {tabButtons.map((tab, i) => (
          <button
            type="button"
            key={tab.label}
            onClick={() => setActiveTab(i + 1)}
            className={`tab uppercase  ${
              activeTab === i + 1 ? "tab-active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="">
        {panels.map((panel, i) => (
          <div className="w-full" key={i} hidden={activeTab !== i + 1}>
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
};
