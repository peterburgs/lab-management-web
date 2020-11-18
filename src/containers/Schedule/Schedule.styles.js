import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  schedule: {
    paddingTop: 12,
  },
  button: {
    textTransform: "none",
    height: "auto",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '0.5rem',
    }
  },
  toolbarLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    "& button": {
      marginRight: "0.5rem",
    },
  },
  toolbarRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "& p": {
      marginLeft: "0.5rem",
    },
  },
  formControl: {
    margin: `0 0.5rem`,
    minWidth: 120,
  },
}));