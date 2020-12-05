import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  semester: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  paper: {
    padding: "0.5rem",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 8,
    textTransform: "none",
  },
  dialog: {
    borderRadius: 16,
  },
}));
