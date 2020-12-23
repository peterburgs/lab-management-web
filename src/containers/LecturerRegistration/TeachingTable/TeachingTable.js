import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  TableBody,
  Table,
  TableCell,
  TableRow,
  TablePagination,
  Button,
} from "@material-ui/core";
import useStyles from "./TeachingTable.styles";
import PropTypes from "prop-types";
import EnhancedToolbar from "../../../hoc/EnhancedTableToolbar/EnhancedTableToolbar";
import EnhancedTableHead from "../../../components/EnhancedTableHead/EnhancedTableHead";
import { withStyles } from "@material-ui/core/styles";
import SimpleBar from "simplebar-react";

const StyledTableRow = withStyles(() => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: `rgba(26, 115, 232, 0.1)`,
    },
  },
}))(TableRow);

const TeachingTable = (props) => {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("courseName");

  const headCells = [
    {
      id: "#",
      label: "#",
    },
    {
      id: "courseName",
      label: "Course name",
    },
    {
      id: "group",
      isNumber: true,
      label: "Group",
    },
    {
      id: "numberOfStudents",
      isNumber: true,
      label: "Number of students",
    },
    {
      id: "numberOfPracticalWeeks",
      isNumber: true,
      label: "Number of practical weeks",
    },
  ];

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const createSortHandler = (property) => () => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.teachings.length - page * rowsPerPage);

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <div className={classes.teachingTable}>
      <Paper className={classes.paper}>
        <EnhancedToolbar title={"Teachings"}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Add new teaching
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            style={{
              minWidth: 100,
              backgroundColor: "#388E3C",
              color: "#fff",
            }}
          >
            Import
          </Button>
        </EnhancedToolbar>
        <TableContainer>
          <SimpleBar style={{ maxHeight: 300 }}>
            <Table style={{ minWidth: 700 }} stickyHeader>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onCreateSortHandler={createSortHandler}
                headCells={headCells}
                isAllowSort={true}
              />
              <TableBody>
                {stableSort(props.teachings, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <StyledTableRow
                      className={classes.row}
                      hover
                      onClick={() => handleClick(row.id)}
                      key={row.id}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">{row.courseName}</TableCell>
                      <TableCell align="left">{row.group}</TableCell>
                      <TableCell align="left">{row.numberOfStudents}</TableCell>
                      <TableCell align="center">{row.numberOfPracticalWeeks}</TableCell>
                    </StyledTableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={5} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </SimpleBar>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.teachings.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

TeachingTable.propTypes = {
  teachings: PropTypes.array.isRequired,
};

export default TeachingTable;
