import React from "react";
import "./groupchatselecton.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const GroupChatSelection = ({
  chatGroup,
  selectedGroup,
  handleChatGroupSelect,
}) => {
  return (
    <div
      className={`chat-group ${
        selectedGroup === chatGroup._id ? "selected" : ""
      }`}
      onClick={() => {
        handleChatGroupSelect(chatGroup._id);
      }}
    >
      <p className="left-item-text">{chatGroup.name}</p>
      <MoreHorizIcon className="icon-hover" />
    </div>
  );
};

export default GroupChatSelection;
