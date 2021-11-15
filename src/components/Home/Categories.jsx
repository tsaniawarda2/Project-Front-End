import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Section,
  Title,
} from "../../assets/styles/categoryItem";
import { BASEURL } from "../../config/api";

const Categories = () => {
  const [category, setCategory] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`${BASEURL}/categories`);
      setCategory(await response.clone().json());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container>
      {category.map((item, idx) => (
        <Section key={idx}>
          <Image src={item.pict} />
          <Info>
            <Title>{item.category}</Title>
            <NavLink to={`/catalogs/`}>
              <Button>Belanja Sekarang</Button>
            </NavLink>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default Categories;
