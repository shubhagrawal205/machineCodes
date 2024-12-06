import { useState } from "react";

const Tabs = ({currentIndex = 0 }) => {

  const tabsData = [
    {
      label: "Tab 1",
      content: (
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.
          <br />
        </div>
      ),
      disabled: false
    },
    {
      label: "Tab 2",
      content: (
        <div>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
          <br />
        </div>
      ),
      disabled: false
    }
  ];
  const [currentTab, setCurrentTab] = useState(currentIndex);

  const generateTabsHeading = () => {
    return (
      <div className="tabs-heading">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTab(index)}
            disabled={tab.disabled}
            className={index === currentTab ? "active-tab" : ""}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  };

  const generateTabsContent = () => {
    return (
      <div className="tabs-content">
        {tabsData[currentTab] && tabsData[currentTab].content}
      </div>
    );
  };
  
  return (
    <>
      {generateTabsHeading()}
      {generateTabsContent()}
    </>
  );
};

export default Tabs;