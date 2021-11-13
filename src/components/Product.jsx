import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

import { Circle, Section, Image, Info, Icon } from "../assets/styles/product";
import { DataContext } from "../context/DataProduct";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const { data } = useContext(DataContext);
  return (
    <Container>
      {data?.map((item, idx) => (
        <Section key={idx}>
          <Circle />
          <Image src={item?.image} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <NavLink to={`/detail/${item?.id}`}>
              <Icon>
                <SearchOutlined />
              </Icon>
            </NavLink>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default Products;
