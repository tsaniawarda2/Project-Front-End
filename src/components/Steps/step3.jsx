import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import "../../assets/styles/checkout.css";
import { renderButton, renderText } from "./checkout";
import swal from "sweetalert";
import { BASEURL } from "../../config/api";

const Step3 = ({ data, handlePrev }) => {
  // console.log(data, "data from 3");
  const cart = localStorage.getItem("cart");
  // console.log(cart, "< 3");
  const arrCart = JSON.parse(cart);
  // console.log(arrCart.cart, "arrcart");
  const total = localStorage.getItem("total");

  const handlePay = async () => {
    const id = arrCart?.cart.map((product) => product?.id);
    try {
      const arrPromises = id?.map((productId) => {
        return fetch(`${BASEURL}/products/${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inStock: false }),
        });
      });
      const checkout = await Promise.all(arrPromises);
      const failedProduct = [];
      const successProduct = [];
      checkout.forEach((result, index) => {
        const { status } = result;
        if (status === 200) {
          successProduct.push(arrCart.cart[index]);
          swal({
            title: "Payment Success",
            text: "Thank you for your order, see you!",
            icon: "success",
            buttons: {
              continueShopping: "Continue Shopping",
              ok: "Ok",
            },
          }).then((value) => {
            switch (value) {
              case "continueShopping":
                window.location = "/catalogs";
                break;
              case "ok":
                window.location = "/";
                break;
              default:
                window.location = "/";
                break;
            }
          });
        } else {
          failedProduct.push(arrCart[index]);
          swal({
            title: "Payment Failed",
            text: "Oppss! sorry internal server error... Try again later, see you!",
            icon: "error",
            buttons: "Ok",
          });
        }
      });
      console.log("success data:", successProduct);
      console.log("failed data:", failedProduct);

      const payloadTransactions = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        address: data?.address,
        phone: data?.phone,
        email: data?.email,
        paymentMethod: data?.paymentMethod,
        cardNumber: data?.cardNumber,
        expiryDate: data?.expiryDate,
        cvv: data?.cvv,
        statusPayment: "Success",
        totalProduct: successProduct.length,
        totalPrice: total,
        transactionDetails: successProduct,
      };
      fetch(`${BASEURL}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadTransactions),
      })
        .then((res) => {
          if (res.status !== 201) {
            return new Error("failed created transactions");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Paper className="FormComponent-steps-4">
        <Box mt={2} mb={2} className="order-review-title">
          {renderText({
            label: "Order Review",
            type: "h6",
            color: "textPrimary",
            align: "center",
          })}
        </Box>

        <Grid container spacing={1} style={{ marginBottom: "16px" }}>
          <div className="order-review flex-column">
            <h5 className="title-detail">Detail Items</h5>
            <div className="flex-row">
              {arrCart.cart.map((product) => (
                <div className="detail-item">
                  <div className="col-md-6 col-sm-6">
                    <h6>{product.name}</h6>
                  </div>
                  <div className="col-md-6 col-sm-6 price">
                    <h6 className="item-price"> IDR {product.price}</h6>
                  </div>
                </div>
              ))}
            </div>

            <hr></hr>
            <div className="row-price">
              <div className="col-md-6 col-sm-6 total-price-title">
                <h5>Total : </h5>
              </div>
              <div className="col-md-6 col-col-sm-6 total-price-stepper">
                <h5> IDR {total}</h5>
              </div>
            </div>
          </div>
        </Grid>

        <Grid container component={Box} justify="flex-end" mt={2} p={2}>
          <Box ml={2}>
            {renderButton({
              label: "Back",
              color: "default",
              onClick: handlePrev,
            })}
          </Box>
          <Box ml={2}>
            {/* {renderButton({ label: "Pay Now", onClick: handlePay })} */}
            <button onClick={handlePay} className="button-pay">
              Pay Now
            </button>
          </Box>
        </Grid>
      </Paper>
    </>
  );
};

export default Step3;
