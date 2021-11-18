import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { SearchOutlined } from "@material-ui/icons";

import {
  Circle,
  Section,
  Image,
  Info,
  Icon,
} from "../../assets/styles/product";
import { DataContext } from "../../context/DataProduct";

const Container = styled.div`
  padding: 0px 70px;
  margin-bottom: 50px;
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
            <NavLink to={`/detail/${item?.id}`}>
              <Icon>
                <SearchOutlined style={{ color: "#3473c5" }} />
              </Icon>
            </NavLink>
          </Info>
        </Section>
      ))}
    </Container>
  );
};

export default Products;
