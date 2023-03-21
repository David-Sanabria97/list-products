import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CustomTable = (props) => {
  const { rows, columns, onClick, totalPage, handlePage, handleDelete } = props;

  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return (
                  <TableCell align="center" key={index}>
                    {column}
                  </TableCell>
                );
              })}

              <TableCell>
                <AddCircleIcon onClick={onClick} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <img src={row.image} height="70px" />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        style={{ background: "white", width: "100%", alignItems: "center" }}
      >
        <Pagination
          count={totalPage}
          variant="outlined"
          onChange={handlePage}
        />
      </Stack>
    </Stack>
  );
};

export default CustomTable;
