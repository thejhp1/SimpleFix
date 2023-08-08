import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FriendListToolTip } from "./FriendListToolTip";
import { useRef, useState } from "react";

export function FriendListMenuIcon({ serverId }) {
  const imgRef = useRef();
//   const server = useSelector((state) => state.servers[serverId]);
  const [isHover, setIsHover] = useState(false);
  const userStore = useSelector((state) => state.session.user);
//   if (!server) return false;
//   const history = useHistory();
//   const handleClick = (e) => {
//     e.preventDefault();
//     history.push(`/${server.id}/${server.channels[0].id}`);
//   };
  return (
    <>
      {/* {server.owner.id == userStore.id ||
      server.users.map((user) => user.id == userStore.id) ? ( */}
        <div
          className='friend-list-menu__container'
        //   onClick={handleClick}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className='friend-list-icon-container' ref={imgRef}>
            <i className='fa-solid fa-ellipsis-vertical fa-lg'></i>
            {isHover && (
              <FriendListToolTip  parentRef={imgRef} />
            )}
          </div>
        </div>
      {/* ) : (
        ""
      )} */}
    </>
  );
}
