import React from "react";
import { STRING_TYPE } from "../../constants/text";

const titleStyle = {
  textAlign: "center",
  padding: "10px 0",
  width: "100%",
  fontSize: "26px",
  fontWeight: "700",
  color: "white",
  fontStyle: "italic",
};

const Title = ({ name }) =>
  typeof name === STRING_TYPE &&
  name.trim() && <section style={titleStyle}>{name}</section>;

export default React.memo(Title);
Title.defaultProps = { name: "" };
