import React from "react";
import { CryptoState } from "../CryptoContext";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { darkTheme } from "../assets/theme";
import { useStyles } from "../assets/style";

export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.header_title}
              onClick={() => {
                navigate("/");
              }}
              variant="h6"
            >
              仮想通貨
            </Typography>
            <Select
              variant="outlined"
              style={{
                marginRight: 15,
                width: 100,
                heigh: 40,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
