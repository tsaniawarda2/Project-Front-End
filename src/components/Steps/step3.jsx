import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import "../../assets/styles/checkout.css"
import {
  renderButton,
  renderText,
} from "./checkout";

const Step3 = ({
  handleNext,
  handlePrev,
}) => {

  const total = localStorage.getItem("total")
  const cart = localStorage.getItem("cart")
  console.log(cart, "< 3");
  const arrCart = JSON.parse(cart)
  console.log(arrCart.cart, "arrcart");

  return (
    <Paper className="FormComponent-steps-4">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Order Review",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <div className="order-review flex-column px-5">
          <h5>Products Detail :</h5>
          <div className="flex-row">
            {arrCart.cart.map((product) => (
              <div className="row">
                <div className="col-md-6">
                  <h6>{product.name}</h6>
                </div>
                <div className="col-md-6">
                  <h6>IDR {product.price}</h6>
                </div>
              </div>
              ))
              }
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>Total : </h5>
            </div>
            <div className="col-md-6">
              <h5>IDR {total}</h5>
            </div>
          </div>
        </div>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>
          {renderButton({ label: "Pay Now", onClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
};

export default Step3;
