import { useState } from "react";

function TextExpander({
  className = "",
  btnStyle = "",
  children = "",
  btnTextExpand = "Show More",
  btnTextCollapse = "Show Less",
  nbWordsShown = 10,
  expand = false,
}) {
  const [expanded, setExpanded] = useState(expand);
  const plainText = children.split(" ").slice(0, nbWordsShown).join(" ");
  const lastChar = plainText[plainText.length - 1];
  const punctuation = "-+*/.<>,?!@#$%^&()_={}[]:;";
  const collapsedText = punctuation.includes(lastChar)
    ? plainText.slice(0, -1)
    : plainText;
  return (
    <div className={className}>
      <p>{expanded ? children : collapsedText + "..."}</p>
      <button className={btnStyle} onClick={() => setExpanded(!expanded)}>
        {expanded ? btnTextCollapse : btnTextExpand}
      </button>
    </div>
  );
}

export default TextExpander;
