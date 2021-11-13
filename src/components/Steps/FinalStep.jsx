import React from "react";
import { Box, Paper } from "@material-ui/core";
import "../../assets/styles/checkout.css"
import { renderText } from "./checkout";
import { NavLink } from "react-router-dom";

const FinalStep = ({ data }) => {
  return (
    <Paper className="FormComponent-steps-4">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
        <div className="px-3 py-5">
          <h5>Payment Success! Thank You for Ordering!</h5>
          <NavLink to="/">
            <button className="btn btn-dark">Back to Home</button>
          </NavLink>
        </div>
      {JSON.stringify(data, null, 4)}
    </Paper>
  );
};

export default FinalStep;
