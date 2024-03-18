import "./TabContainer.scss";

interface TabContainerProps extends React.PropsWithChildren {
  // tab ribbon size
  tabRibbonSize?: number | string;
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
 */
export default function TabContainer(props: TabContainerProps) {
  const {
    // eslint-disable-next-line
    tabRibbonSize,
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

  return (
    <div
      className={tabClassName}
      style={styles && styles.root ? { ...styles.root } : undefined}
    >
      <button
        className="tabContainer__ribbon"
        style={styles && styles.ribbon ? { ...styles.ribbon } : undefined}
        onClick={onRibbonClick}
      >
        {tabRibbonText}
      </button>
      <div
        className="tabContainer__body"
        style={styles && styles.body ? { ...styles.body } : undefined}
      >
        <div className="tabContainer__scroll-area">{children}</div>
      </div>
    </div>
  );
}
