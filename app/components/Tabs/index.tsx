import { useRef, useState } from "react";
import TabContainer from "../TabContainer";
import "./Tabs.scss";

interface TabItemProps {
  label: string;
  content: JSX.Element;
  bgColor?: string;
}

interface TabsProps {
  items: TabItemProps[];
}

export default function Tabs(props: TabsProps) {
  const { items } = props;
  //eslint-disable-next-line
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="tab-overlay-area" ref={containerRef}>
      {items.map((item: TabItemProps, idx: number) => {
        const offsetCalc = idx / (items.length + 4);
        return (
          <TabContainer
            key={`tab-item-${idx}`}
            tabRibbonText={item.label}
            onRibbonClick={(e) => {
              if (idx === activeTab) {
                setActiveTab(undefined);
              } else {
                setActiveTab(idx);
                try {
                  if (containerRef.current) {
                    const rootTab = e.currentTarget.parentElement;
                    const rootRect = rootTab.getBoundingClientRect();
                    const containerRect = (
                      containerRef.current as HTMLElement
                    ).getBoundingClientRect();
                    console.log(rootRect);
                    (containerRef.current as HTMLElement).scroll({
                      left: (offsetCalc - 0.025) * containerRect.width,
                      behavior: "smooth",
                    });
                  }
                } catch (e) {
                  console.error(e);
                }
              }
            }}
            className={`tab-overlay-area__item ${
              Math.random() > 0.5
                ? "tab-overlay-area__item--tilt-left"
                : Math.random() > 0.3
                  ? "tab-overlay-area__item--tilt-right"
                  : undefined
            }`}
            activeClass="tab-overlay-area__item--active"
            isActive={activeTab === idx}
            styles={{
              root: {
                zIndex: 100 - idx,
              },
              ribbon: {
                left: `${offsetCalc * 100}%`,
                minWidth: `${(1 / (items.length + 4)) * 100}%`,
                backgroundColor: item.bgColor,
              },
              body: {
                backgroundColor: item.bgColor,
              },
            }}
          >
            {item.content}
          </TabContainer>
        );
      })}
    </div>
  );
}
