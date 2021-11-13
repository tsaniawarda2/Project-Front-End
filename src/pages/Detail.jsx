import { useParams } from "react-router";
import { useContext } from "react";

import {
  AddContainer,
  Amount,
  AmountContainer,
  Desc,
  Image,
  ImgContainer,
  InfoContainer,
  Price,
  Title,
  Wrapper,
} from "../assets/styles/detail";

import { DataContext } from "../context/DataProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Detail = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(DataContext);

  const { data } = useContext(DataContext);

  let { id } = useParams();

  const product = data?.find((data) => data?.id === id);

  return (
    <>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
          <Desc>{product?.description}</Desc>
          <Price>IDR {product?.price}</Price>
          <AmountContainer>
            <Amount>{product?.condition}</Amount>
          </AmountContainer>
          <AddContainer>
            {cart.some((p) => p.id === product.id) ? (
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove from Cart
              </button>
            ) : (
              <button
                className="btn btn-dark"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
                disabled={!product.inStock}
              >
                {!product.inStock ? "Out of Stock" : "Add to Cart"}
              </button>
            )}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Detail;
