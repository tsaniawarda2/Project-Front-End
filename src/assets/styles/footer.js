import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 30px 0px 30px 85px;
  ${mobile({ margin: "35px" })}
  ${tablet({ marginLeft: "40px" })};
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  margin: 30px 85px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
  ${tablet({ textAlign: "center" })};
`;

export const List = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.p`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  margin: 30px 85px 30px 0px;
  ${mobile({ display: "none" })}
  ${tablet({ margin: "30px 28px 15px 45px" })};
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
