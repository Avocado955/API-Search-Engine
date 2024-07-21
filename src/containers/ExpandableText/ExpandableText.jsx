import { useState } from "react";
import styles from "./ExpandableText.module.scss";

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children === undefined) return <p>Description Unavailable</p>;

  if (children.length <= maxChars) return <p>{children}</p>;

  let text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}
      <span
        className={styles.expandBtn}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? " Read Less" : "... Read More"}
      </span>
    </p>
  );
};

export default ExpandableText;
