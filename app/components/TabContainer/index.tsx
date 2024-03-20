import "./TabContainer.scss";

interface TabContainerProps extends React.PropsWithChildren {
  // tab ribon text
  tabRibbonText: string;
  styles?: {
    root?: React.CSSProperties;
    ribbon?: React.CSSProperties;
    body?: React.CSSProperties;
  };
  isActive?: boolean;
  className?: string;
  activeClass: string;
  // eslint-disable-next-line
  onRibbonClick: (e?: any) => void;
}
/**
 * Tab ribbon component
 * NOTE: need to investigate later on proper focus capturing for modal/popup
 * like element
 */
export default function TabContainer(props: TabContainerProps) {
  const {
    // eslint-disable-next-line
    tabRibbonText,
    styles,
    isActive,
    className,
    activeClass,
    onRibbonClick,
    children,
  } = props;
  let tabClassName = "tabContainer";
  if (isActive) tabClassName += " " + activeClass || "";
  if (className) tabClassName += " " + className;
  // const rootRef = useRef<HTMLDivElement>(null);

  return (
    // eslint-disable-next-line
    <div
      className={tabClassName}
      style={styles && styles.root ? { ...styles.root } : undefined}
      role="dialog"
      aria-modal="true"
      aria-hidden={isActive ? "false": "true"}
      // ref={rootRef}
    >
      <button
        className="tabContainer__ribbon"
        style={styles && styles.ribbon ? { ...styles.ribbon } : undefined}
        aria-haspopup="true"
        onClick={(e) => {
          onRibbonClick(e)
          e.currentTarget.blur();
        }}
      >
        <span>{tabRibbonText}</span>
      </button>
      <div
        className="tabContainer__body"
        style={styles && styles.body ? { ...styles.body } : undefined}
      >
        {children}
      </div>
    </div>
  );
}
