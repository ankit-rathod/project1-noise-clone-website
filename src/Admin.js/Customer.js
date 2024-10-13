import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext } from 'react';
import { Context } from '../Pages/MyContext';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));








export default function Customer() {

    
    const {userData}=React.useContext(Context)





  return (
    <TableContainer >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell >Full Name</StyledTableCell>
            <StyledTableCell align="right">Mobile Number</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((i) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {i.fullName}
              </StyledTableCell>
              <StyledTableCell align="right">{i.phone}</StyledTableCell>
              <StyledTableCell align="right">{i.password}</StyledTableCell>
              <StyledTableCell align="right">{i.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
