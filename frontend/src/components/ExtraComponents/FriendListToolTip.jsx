import { useEffect, useState } from "react";
import ReactDom from "react-dom";

export function FriendListToolTip({ serverName, parentRef }) {
  if (!parentRef.current) return false;
  const [style, setStyle] = useState({});
  useEffect(() => {
    const rect = parentRef.current.getBoundingClientRect();
    setStyle({
      top: `${rect.top + window.pageYOffset}px`,
      left: `${rect.left + window.pageXOffset + 10}px`,
      position: "absolute",
      animation: "fade .3s ease forwards",
    });
  }, [parentRef]);
  return ReactDom.createPortal(
    <div style={style} className='server__img-tooltip'>
        <h1>asdasd</h1>
    </div>,
    document.getElementById("root")
  );
}
