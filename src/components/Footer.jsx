import { NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "../assets/styles/footer";

import "../assets/styles/home.css";
export default function Footer() {
  return (
    <>
      <Container>
        <Left>
          <Logo>BuyMePlease</Logo>
          <Desc>
            We are the first ecommerce start-up that's focusing on providing
            customers with second hand goods with the highest quality and lowest
            price possible. For more information, please visit us on these
            links. Happy shopping!
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>
              <NavLink exact to="/" className="link-footer">
                Home
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/register" className="link-footer">
                Register
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/catalogs" className="link-footer">
                Catalogs
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/login" className="link-footer">
                Login
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink exact to="/cart" className="link-footer">
                Cart
              </NavLink>
            </ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} />
            Benyamin Sueb St. RT.13/RW.10, Pademangan Tim., Jakarta Utara, Kota
            Jkt Utara, Daerah Khusus Ibukota Jakarta 14410
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +62 811-1213-5792
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            BuyMePlease@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <hr />
      <div class="text-center">
        <p class="copyright">Created By BuyMePlease 2021 | All rights reserved</p>
      </div>
    </>
  );
}
