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
          <Link>Don't Have an Account? </Link>
          <Link>Create Here</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;