import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { v4 as uuid } from "uuid";
import { TransitionsModal as Edit } from "./EditUser";
import { TransitionsModal as Show } from "./ShowUser";
import { useContext } from "react";
import { UsersContext } from "../Module/UsersModule";

export default function DenseTable() {
  const { deleteHandler, editUser, addUser, users } = useContext(UsersContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>Name</h3>
            </TableCell>
            <TableCell align="right">
              <h3>UserName</h3>
            </TableCell>
            <TableCell align="right">
              <h3>E-mail</h3>
            </TableCell>
            <TableCell align="right">
              <h3>Phone</h3>
            </TableCell>

            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={uuid()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user?.username}</TableCell>
              <TableCell align="right">{user?.email}</TableCell>
              <TableCell align="right">{user?.phone}</TableCell>

              <TableCell align="right">
                {" "}
                <Button
                  style={{ color: "red", border: "red solid 1px" }}
                  onClick={(e) => deleteHandler(e, user.id)}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>

              <TableCell align="right">
                {" "}
                <Edit user={user} addUser={addUser} editUser={editUser} />{" "}
              </TableCell>
              <TableCell align="right">
                <Show user={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
