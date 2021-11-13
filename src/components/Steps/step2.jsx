import React, {useState, useEffect} from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import "../../assets/styles/checkout.css"
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "./checkout";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  const [data, setData] = useState({
    cardNumber: state?.data?.cardNumber || "",
    expiryDate: state?.data?.expiryDate || "",
    cvv: state?.data?.cvv || "",
  })

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(()=>{
    setData({
      cardNumber: state?.data?.cardNumber,
      expiryDate: state?.data?.expiryDate,
      cvv: state?.data?.cvv,
    })
    validatedInput()
  },[state])

  // console.log(data, "<< data")

  function validatedInput(){
    let isValid = true;
    if(!data?.cardNumber){
      isValid = false
    }
    if(!data?.expiryDate){
      isValid = false
    }
    if(!data?.cvv){
      isValid = false
    }
    
    if(isValid){
      setIsDisabled(false)
    } else{
      setIsDisabled(true)
    }
  }

  return (
    <Paper className="FormComponent-steps-4">
      <Box mt={2} mb={2}>
        {renderText({
          label: "Payment Detail",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={12}>
          {renderSelect({
            state,
            name: "paymentMethod",
            label: "Payment Method",
            options: [
              { key: "Bank BRI", value: "Bank BRI" },
              { key: "Bank BCA", value: "Bank BCA" },
              { key: "Bank Mandiri", value: "Bank Mandiri" },
              { key: "Bank BSI", value: "Bank BSI" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={12}>
          {renderInputField({
            state,
            name: "cardNumber",
            label: "Card Number",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "expiryDate",
            label: "Expiry Date",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "cvv",
            label: "CVV",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext, isDisabled })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step2;
