import React from "react";
import { makeStyles } from "@material-ui/core";
export const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    coinInfoSelectIntervalButton: {
      border: "1px solid #B384FF",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "#B384FF" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#B384FF",
        color: "black",
      },
      width: "22%",
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.coinInfoSelectIntervalButton}>
      {children}
    </span>
  );
};
