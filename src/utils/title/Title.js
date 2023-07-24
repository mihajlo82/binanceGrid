import React from "react";
import { STRING_TYPE } from "../../constants/text";
import { TitleContainer } from "./styled";

const Title = ({ name }) =>
  typeof name === STRING_TYPE &&
  name.trim() && <TitleContainer>{name}</TitleContainer>;

export default React.memo(Title);
Title.defaultProps = { name: "" };
