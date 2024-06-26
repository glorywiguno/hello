import { useRef, useState, useEffect } from "react";
import anime from "animejs";
import TabContainer from "../TabContainer";
import "./TabsCollection.scss";
import { getFromRandom2 } from "../../utils/getRandom";

interface TabNavButtonProps {
  type?: "left" | "right" | "close";
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
  };
  isDisabled?: boolean;
  // eslint-disable-next-line
  onClick?: (...args: any)=> void
  className?: string;
}

/**
 * Nav button for tab collection
 * @param props
 * @returns
 */
const TabNavButton = (props: TabNavButtonProps) =>  {
  const {
    type,
    isDisabled,
    className,
    styles,
    onClick
  } = props;

  let btnContent: JSX.Element | undefined= undefined;
  switch(type) {
    case "left":
      btnContent=(
        <svg
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={styles?.icon}
          className="svg-icon"
        >
          <path d="M16 10C16.5523 10 17 9.55229 17 9C17 8.44772 16.5523 8 16 8L16 10ZM1.29289 8.29289C0.902369 8.68342 0.902369 9.31658 1.29289 9.70711L7.65685 16.0711C8.04738 16.4616 8.68054 16.4616 9.07107 16.0711C9.46159 15.6805 9.46159 15.0474 9.07107 14.6569L3.41421 9L9.07107 3.34315C9.46159 2.95262 9.46159 2.31946 9.07107 1.92893C8.68054 1.53841 8.04738 1.53841 7.65685 1.92893L1.29289 8.29289ZM16 8L2 8L2 10L16 10L16 8Z" fill="inherit"/>
        </svg>
      )
      break;
    case "right":
      btnContent = (
        <svg
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={styles?.icon}
          className="svg-icon"
        >
          <path d="M2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10L2 8ZM16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289L10.3431 1.92893C9.95262 1.53841 9.31946 1.53841 8.92893 1.92893C8.53841 2.31946 8.53841 2.95262 8.92893 3.34315L14.5858 9L8.92893 14.6569C8.53841 15.0474 8.53841 15.6805 8.92893 16.0711C9.31946 16.4616 9.95262 16.4616 10.3431 16.0711L16.7071 9.70711ZM2 10L16 10L16 8L2 8L2 10Z" fill="inherit"/>
        </svg>)
      break;
    case "close":
      btnContent = (
        <svg
          viewBox="0 0 18 18"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={styles?.icon}
          className="svg-icon"
        >
          <path d="M14.9497 3L3 14.9497M14.9497 14.9498L3 3.00003" stroke="currentColor" strokeWidth="2" strokeMiterlimit="3.99933" strokeLinecap="round"/>
        </svg>
      );


      break;
  }

  return (
    <button
      className={`paper-btn paper-btn--unipad${' ' + className}`}
      onClick={onClick}
      disabled={isDisabled}
      style={styles?.root}
    >
      {btnContent}
    </button>
  )
}

interface TabItemProps {
  label: string;
  content: JSX.Element;
  bgColor?: string;
}

interface TabsProps {
  items: TabItemProps[];
}

/**
 * collection of tab containers
 * @param props
 * @returns
 */
export default function TabsCollection(props: TabsProps) {
  const { items } = props;
  //eslint-disable-next-line
  const [activeTab, setActiveTab] = useState<number | undefined>(undefined);
  const [isNarrowScreen, setIsNarrowScreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const matchMediaRef = useRef<MediaQueryList|undefined>(undefined);


  useEffect(() => {
    matchMediaRef.current = window.matchMedia('(max-width:950px)')

    const updateScreenStatus = (ev: MediaQueryListEvent) => {
      setIsNarrowScreen(ev.matches)
    }

    // start animation for tabs
    anime({
      targets: ".tab-overlay-area__item",
      direction: "normal",
      easing: "easeOutSine",
      duration: 300,
      opacity: [0, 1],
      translateX:['-50%', '-50%'],
      translateY: (el: any, idx: number) => {
        return matchMediaRef.current?.matches? ['120vh',`${40 - 20 * idx / (items.length + 3)}vh`]: ['120vh', '40vh']
      },
      delay: (el: any, idx: number) => {
        return 500 + idx * 100
      },
      complete:() =>{
        anime.remove(".tab-overlay-area__item")
      }
    })

    matchMediaRef.current.addEventListener("change",updateScreenStatus)

    return () => {
      if (matchMediaRef.current !== undefined) {
        matchMediaRef.current.removeEventListener("change",updateScreenStatus)
      }
    }
  },[])



  return (
    //eslint-disable-next-line
    <div
      className="tab-overlay-area"
      ref={containerRef}
      style={activeTab !== undefined ? {
        overflowX: "hidden",
        background: "rgba(0,0,0,0.2)",
        pointerEvents: "all"
      }: undefined}
      onClick={(e) => {

        if (e.currentTarget.isEqualNode(e.target as any) && activeTab !== undefined) {
          setActiveTab(undefined);
        }
      }}
    >
      {items.map((item: TabItemProps, idx: number) => {
        const offsetCalc = idx / (items.length + 3);

        let rootItemTransform: string | undefined = ''

        if (isNarrowScreen) {
          rootItemTransform = `translateX(-50%) translateY(${40 - 20 * offsetCalc}vh)`
        }

        if(activeTab === idx) {
          rootItemTransform = 'translateX(-50%) translateY(-50%)';
        }
        if (idx!== activeTab && activeTab!== undefined) {
          rootItemTransform = activeTab > idx?'rotate(5deg) translateX(-100%) translateY(40vh) ': 'rotate(-5deg) translateX(0%) translateY(40vh)'
        }

        return (
          <TabContainer
            key={`tab-item-${idx}`}
            tabRibbonText={item.label}
            onRibbonClick={() => {
              if (idx === activeTab) {
                setActiveTab(undefined);
              } else {
                setActiveTab(idx);
              }
            }}
            className={`tab-overlay-area__item ${
              getFromRandom2(
                "tab-overlay-area__item--tilt-left",
                 "tab-overlay-area__item--tilt-right"
              ) ?? ''
            }`}
            activeClass="tab-overlay-area__item--active"
            isActive={activeTab === idx}
            styles={{
              root: {
                zIndex: activeTab === idx ? 101 : 100 - idx,
                transform: rootItemTransform,
              },
              ribbon: {
                left: `${offsetCalc * 100}%`,
                minWidth: `max(${(1 / (items.length + 3)) * 100}%, 6em)`,
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

      {activeTab !== undefined ? (
        <>
          <TabNavButton
            className="tab-overlay-area__nav-btn tab-overlay-area__nav-btn--left"
            type="left"
            isDisabled={activeTab <= 0}
            onClick={() => {
              if (activeTab > 0) {
                setActiveTab(activeTab-1)
              }
            }}
          />
          <TabNavButton
            className="tab-overlay-area__nav-btn tab-overlay-area__nav-btn--close"
            type="close"
            onClick={() => { setActiveTab(undefined) }}
          />
          <TabNavButton
            className="tab-overlay-area__nav-btn tab-overlay-area__nav-btn--right"
            type="right"
            isDisabled={activeTab >= items.length - 1}
            onClick={() => {
              if (activeTab < items.length-1) {
                setActiveTab(activeTab+1)
              }
            }}
          />
        </>
      ) : undefined}
    </div>
  );
}
