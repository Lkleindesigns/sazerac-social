import React from "react";
import { logoutUser } from "../reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../styles/NavbarStyles";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { toggleTheme } from '../reducers/themeReducer'

const Navbar = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const classes = styles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    handleClose();
  };

  const isWriter = user
    ? user.current_user.roles.find((role) => {
        return role.name === "writer";
      })
    : null;
  const toggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={classes.root}>
      <button onClick={toggle}>Dark </button>
      <AppBar position="sticky" color="default">
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              color="inherit"
              component={Link}
              to="/"
            >
              Sazerac Social
            </Typography>
            <Typography>
              <Button component={Link} to="/articles">
                Articles
              </Button>
              {isWriter && (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/publisher/article/new"
                >
                  Add post
                </Button>
              )}
            </Typography>

            {!user && (
              <>
                <Button component={Link} to="/login">
                  Login
                </Button>
                <Button component={Link} to="/register">
                  Register
                </Button>
              </>
            )}
            {user && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Menu>
                {`${user.current_user.display_name}`}
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
