import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  header_title: {
    color: "#B384FF",
    flex: 1,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  banner: {
    backgroundImage: "url(./black.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  bannerTagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    color: "white",
    textTransform: "uppercase",
    alignItems: "center",
  },
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "#B384FF",
    },
  },
}));
