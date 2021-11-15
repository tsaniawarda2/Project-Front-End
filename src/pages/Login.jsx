import {
  Button,
  Form,
  Input,
  Link,
  Container,
  Title,
  Wrapper,
} from "../assets/styles/login";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <h6>Don't Have an Account? <a href="./Register">Click here</a></h6>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
