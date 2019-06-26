import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DialogTitle from "@material-ui/core/DialogTitle";
import Login from "../Login/Login";
import Register from '../Register/Register'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  loginButton: {
    color: "white",
    border: "none"
  },
  title: {
    textAlign: "center"
  },
  tabs: {
    marginLeft: "23px"
  }
});

const LoginRegisterDialog = ({ setUser}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleTab(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Button
        variant="outlined"
        className={classes.loginButton}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.title} id="login-form">
          {value === 0 ? "Log in to Sazerac Social" : "Join Sazerac Social today"}
        </DialogTitle>

        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleTab}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
          >
            <Tab label="Log In" />
            <Tab label="Sign Up" />
          </Tabs>
          {value === 0 && <Login handleClose={handleClose} setUser={setUser} />}
          {value === 1 && <Register handleClose={handleClose} />}
        </Paper>
      </Dialog>
    </div>
  );
};

export default LoginRegisterDialog;
