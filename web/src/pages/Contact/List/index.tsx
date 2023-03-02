import React, { useState, Fragment, useEffect } from "react";
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
  Link,
} from "@mui/material";
import { listContacts } from "../../../utils/contactApiCalls";
import Spinner from "../../../components/Spinner";
import CreateButton from "../../../components/CreateButton";
import { IShowLinkedCount } from "../../Client/List";
import { api } from "../../../services/api";
import { notify } from "../../../utils/notification";
import { useNavigate } from "react-router-dom";

function ListContact({ hideLinkedCountList }: IShowLinkedCount) {
  const { data, isFetching } = useQuery(["contacts"], listContacts);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [linkedContacts, setLinkedContacts] = useState([]);
  const navigation = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (hideLinkedCountList)
      setLinkedContacts(data.filter((contact) => contact?.clients?.length > 0));
  }, [setLinkedContacts]);

  const handleUnlinkClient = async (e) => {
    const contactId = e.target.getAttribute("data-contact-id");
    const clientId = e.target.getAttribute("data-client-id");
    const { data } = await api.put(`/contacts/unlink/${contactId}/${clientId}`);
    if (data.success) {
      notify(data.message);
      navigation("/create-contact");
    }
  };

  return (
    <div className="contact__list">
      <h2 style={{ textAlign: "center", marginBottom: 8, color: "#1976d2" }}>
        Contacts
      </h2>

      {isFetching ? (
        <Spinner loading={isFetching} />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell align="left">
                    {!hideLinkedCountList ? `Name` : `Contact Full Name`}
                  </TableCell>
                  {!hideLinkedCountList && (
                    <TableCell align="left">Surname</TableCell>
                  )}
                  <TableCell align="left">
                    {!hideLinkedCountList
                      ? `Email address`
                      : `Contact Email address`}
                  </TableCell>
                  {hideLinkedCountList ? (
                    <TableCell align="center">Action</TableCell>
                  ) : (
                    <TableCell align="center">No. of linked clients</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {!data ? (
                  <TableRow>
                    <TableCell colSpan={4}>No contact(s) found</TableCell>
                  </TableRow>
                ) : !hideLinkedCountList ? (
                  data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((contact) => {
                      return (
                        <Fragment key={contact._id}>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell align="left">{contact.name}</TableCell>
                            <TableCell align="left">
                              {contact.surname}
                            </TableCell>
                            <TableCell align="left">{contact.email}</TableCell>
                            <TableCell align="center">
                              {contact.clients.length}
                            </TableCell>
                          </TableRow>
                        </Fragment>
                      );
                    })
                ) : (
                  linkedContacts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((contact, index) => {
                      return (
                        <Fragment key={contact._id + Math.random()}>
                          {contact.clients?.map((clientId) => (
                            <TableRow
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                              key={contact._id + Math.random()}
                            >
                              <TableCell align="left">{`${contact.surname} ${contact.name}`}</TableCell>
                              <TableCell align="left">
                                {contact.email}
                              </TableCell>
                              <TableCell align="center">
                                <a
                                  onClick={handleUnlinkClient}
                                  style={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                  }}
                                  data-contact-id={contact._id}
                                  data-client-id={clientId}
                                >
                                  Unlink
                                </a>
                              </TableCell>
                            </TableRow>
                          ))}
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
            count={!hideLinkedCountList ? data.length : linkedContacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{
              color: "#fff",
              backgroundColor: "#1976d2",
            }}
          />

          <CreateButton link="/create-contact" title="Create Contact" />
        </>
      )}
    </div>
  );
}

export default ListContact;
