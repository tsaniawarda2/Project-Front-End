import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import "../../assets/styles/home.css";

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ffae01;
  color: white;
`;

const Newsletter = () => {
  return (
    <div className="cont-news">
      <div className="news-title">
        <h1>Newsletter</h1>
      </div>
      <div className="decs-news">
        Get timely updates from your favorite products.
      </div>

      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </div>
  );
};

export default Newsletter;
