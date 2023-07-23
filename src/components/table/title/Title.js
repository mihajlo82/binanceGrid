import React from "react";
const titleStyle = {
  textAlign: "center",
  padding: "10px 0",
  width: "100%",
  fontSize: "26px",
  fontWeight: "700",
  color: "white",
};

const Title = ({ name }) =>
  typeof name === "string" &&
  name.trim() && <section style={titleStyle}>{name}</section>;

export default React.memo(Title);
Title.defaultProps = { name: "" };
