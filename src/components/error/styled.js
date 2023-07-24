import styled from "styled-components";

export const ErrorContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(
    circle,
    #6bcba6,
    #5dc6a5,
    #4fc1a5,
    #3ebca4,
    #28b7a4
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 12px;
  background-color: #cf0ce0;
  outline: none;
  border: 1px solid #cf0ce0;
  color: white;
  cursor: pointer;
  font-weight: 600;
`;
