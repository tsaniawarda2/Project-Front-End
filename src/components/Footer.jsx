<<<<<<< HEAD
=======
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

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

>>>>>>> b123e3da8b3bf9f59a7c4c2b4d5095b740104110
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

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>BuyMePlease</Logo>
        <Desc>
          Kami berfokus untuk menyediakan barang - barang bekas dengan kualitas
          terbaik namun dengan harga yang serendah mungkin.
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
          <ListItem>Home</ListItem>
          <ListItem>Catalogs</ListItem>
          <ListItem>Detail Product</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Jl. Benyamin Suaeb,
          RT.13/RW.10, Pademangan Tim., Jakarta Utara, Kota Jkt Utara, Daerah
          Khusus Ibukota Jakarta 14410
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +62 811-1213-5792
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> BMP@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
