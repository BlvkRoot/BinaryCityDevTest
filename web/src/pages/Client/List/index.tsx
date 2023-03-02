import React, { useState, Fragment } from "react";
import { useQuery } from "react-query";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  TablePagination,
} from "@mui/material";
import { listClients } from "../../../utils/clientApiCalls";
import Spinner from "../../../components/Spinner";
import CreateButton from "../../../components/CreateButton";
export interface IShowLinkedCount {
  hideLinkedCountList?: boolean;
}

function ListClient({ hideLinkedCountList }: IShowLinkedCount) {
  const { data, isFetching } = useQuery(["clients"], listClients);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="client__list">
      <h2 style={{ textAlign: "center", marginBottom: 8 }}>Clients</h2>

      {isFetching ? (
        <Spinner loading={isFetching} />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Client code</TableCell>
                  {hideLinkedCountList ? (
                    <TableCell align="center">Action</TableCell>
                  ) : (
                    <TableCell align="center">No. of linked contacts</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {!data ? (
                  <TableRow>
                    <TableCell colSpan={4}>No client(s) found</TableCell>
                  </TableRow>
                ) : (
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((client) => {
                      return (
                        <Fragment key={client._id}>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="left">{client.name}</TableCell>
                            <TableCell align="left">
                              {client.clientCode}
                            </TableCell>
                            {hideLinkedCountList ? (
                              <TableCell align="center">
                                To add link here{" "}
                              </TableCell>
                            ) : (
                              <TableCell align="center">
                                {client.contacts.length}
                              </TableCell>
                            )}
                          </TableRow>
                        </Fragment>
                      );
                    })
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              color: "#fff",
              backgroundColor: "#1976d2",
            }}
          />

          <CreateButton link="/" title="Create Client" />
        </>
      )}
    </div>
  );
}

export default ListClient;
