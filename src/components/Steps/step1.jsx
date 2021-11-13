import React, {useState, useEffect} from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import "../../assets/styles/checkout.css"
import {
  renderButton,
  renderInputField,
  renderText,
} from "./checkout";

const Step1 = ({ state, handleChange, handleNext }) => {
  console.log(state, "from step1");
  const [data, setData] = useState({
    firstName: state?.data?.firstName || "",
    lastName: state?.data?.lastName || "",
    address: state?.data?.address || "",
    phone: state?.data?.phone || "",
    email: state?.data?.email || "",
  })

  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(()=>{
    setData({
      firstName: state?.data?.firstName,
      lastName: state?.data?.lastName,
      address: state?.data?.address,
      phone: state?.data?.phone,
      email: state?.data?.email,
    })
    validatedInput()
  },[state])

  // console.log(data, "<< data")

  function validatedInput(){
    let isValid = true;
    if(!data?.firstName){
      isValid = false
    }
    if(!data?.lastName){
      isValid = false
    }
    if(!data?.address){
      isValid = false
    }
    if(!data?.phone){
      isValid = false
    }
    if(!data?.email){
      isValid = false
    }
    if(isValid){
      setIsDisabled(false)
    } else{
      setIsDisabled(true)
    }
  }

  // console.log(state);
  return (
    <Paper className="FormComponent-steps-4">
      {console.log(state, "from return")}
      <Box mt={2} mb={2}>
        {renderText({
          label: "Shipping Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "address",
            label: "address",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        {renderButton({ label: "Next", onClick: handleNext, isDisabled})}
      </Grid>
    </Paper>
  );
};

export default Step1;
