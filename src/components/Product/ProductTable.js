import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import products from '../../data/products';

function createData(col01, col02, col03, col04, col05) {
  return { col01, col02, col03, col04, col05 };
}



const rows = products.map((item) => {
    //console.log(item.urlImagen);
    return createData(item.id, item.urlImagen, item.name, item.description, item.price);
});


export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ minWidth: 750 }}>
      <Table sx={{ minWidth: 750 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Imagen</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.col01}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.col01}
              </TableCell>
              <TableCell align="right">
                {/* 
                <Avatar
                        sx={{ bgcolor: deepOrange[200] }}
                        alt={row.col03}
                        src={row.col02}
                    />
 */}                <img alt={row.col03} srcSet={row.col02} src={row.col02} width="200px" />
                </TableCell>
              <TableCell align="right">{row.col03}</TableCell>
              <TableCell align="right">{row.col04}</TableCell>
              <TableCell align="right">{row.col05}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
