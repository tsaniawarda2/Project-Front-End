import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Image,
  Info,
  Section,
} from "../../assets/styles/categoryItem";
import { BASEURL } from "../../config/api";
import "../../assets/styles/home.css";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(`${BASEURL}/categories`);
        setCategory(await response.json());
      } catch (e) {
        console.log(e);
      }
    };
    getCategories();
  }, []);

  return (
    <Container>
      {category.map((item, idx) => (
        <Section key={idx}>
          <Image src={item.pict} />
          <Info>
            <div className="cat-title">
              <h1>{item.category}</h1>
            </div>
            <NavLink to="/catalogs">
              <button className="cat-btn">Shop Now</button>
            </NavLink>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default Categories;
