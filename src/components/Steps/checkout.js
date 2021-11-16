import { Button, MenuItem, TextField, Typography } from "@material-ui/core";

export const renderText = ({ type, label, color, ...rest }) => (
  <Typography variant={type} color={color} {...rest}>
    {label}
  </Typography>
);

export const renderInputField = ({ name, label, type, state, onChange }) => {
  const { data, errors } = state;
  // console.log(data[name], "from render");
  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      variant='outlined'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
    />
  );
};
export const renderSelect = ({ name, label, options, state, onChange }) => {
  const { data, errors } = state;
  // console.log(name);
  return (
    <TextField
      select
      label={label}
      variant='outlined'
    //   color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick, isDisabled }) => {
  // console.log(isDisabled);
  return (
    <Button
    disabled={isDisabled}
    variant={variant ? variant : "outlined"}
    color={color ? color : "#FFAE01"}
    fullWidth={fullWidth ? fullWidth : false}
    onClick={onClick}>
    {label}
  </Button>
  )
}
