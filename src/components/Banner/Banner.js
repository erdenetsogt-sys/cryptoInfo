import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Carousel } from "./Carousel";
import { useStyles } from "../../assets/style";

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.bannerTagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            仮想通貨
          </Typography>
          <Typography
            variant="subtitle"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            仮想通情報{" "}
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};
