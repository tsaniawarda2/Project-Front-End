import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ paddingTop: "10px", flexDirection: "column" })};
  ${tablet({ paddingTop: "15px", flexDirection: "column" })};
`;

export const Section = styled.div`
  flex: 1;
  margin: 0px 15px;
  height: 65vh;
  position: relative;
  ${mobile({ paddingBottom: "45px" })};
  ${tablet({ padding: " 10px 60px" })};
`;

export const Image = styled.img`
  box-shadow: 5px 5px 18px #cfcfcf;
  width: 100%;
  height: 90%;
  object-fit: cover;
  border-radius: 20px;
  ${mobile({ height: "45vh" })}
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
