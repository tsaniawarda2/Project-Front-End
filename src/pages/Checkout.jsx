import React, { useState } from "react";
import { Box, Grid, Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import Step1 from "../components/Steps/step1";
import Step2 from "../components/Steps/step2";
import Step3 from "../components/Steps/step3";
import { renderText } from "../components/Steps/checkout";
import "../assets/styles/checkout.css";

function Checkout() {
  const data = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const steps = [
    { label: "Shipping Data" },
    { label: "Payment Details" },
    { label: "Order Review" },
  ];
  const [stepCount, setStepCount] = useState(0);

  const [state, setState] = useState({
    data: data,
    errors: {},
    steps: steps,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleOnChange = ({ target }) => {
    const { data, errors } = state;

    target.value.length < 1
      ? (errors[target.name] = `${target.name} must be filled`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setState({ data, errors });
  };

  const handleNextStep = () => {
    let newCount = stepCount;
    newCount = newCount + 1;
    console.log(newCount, "from handle next");
    setStepCount(newCount);
  };

  const handleBackStep = () => {
    let newCount = stepCount;
    newCount = newCount - 1;
    console.log(newCount, "from handle next");
    setStepCount(newCount);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1
            state={state}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );
      case 1:
        return (
          <Step2
            state={state}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
          />
        );
      case 2:
        return (
          <Step3
            state={state}
            data={state.data}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            handlePrev={handleBackStep}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return <FinalStep data={state.data} />;
      default:
        return (
          <Step1
            state={state}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
          />
        );
    }
  };

  return (
    <Grid container className="FormComponent-formContainer-1">
      {/* {console.log(stepCount, "count from return")} */}
      <Grid item xs={12} sm={7}>
        <form onSubmit={handleSubmit} className="FormComponent-form-2">
          <Paper component={Box} mb={1}>
            <Box
              pt={2}
              styles={{ h6: { fontFamily: "rubik" } }}
              className="box-top"
            >
              {renderText({
                type: "h6",
                label: "Checkout",
                align: "center",
              })}
            </Box>
            <Stepper
              activeStep={stepCount}
              alternativeLabel
              className="stepper"
            >
              {steps.map((item) => (
                <Step key={item.label}>
                  <StepLabel>{item.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Paper>
          {getStepContent(stepCount)}
        </form>
      </Grid>
    </Grid>
  );
}

export default Checkout;
