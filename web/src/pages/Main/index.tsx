import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, TABLE } from "../../styles";
import TabsComponent from "../ClientTabsComponent";

function Main() {
  useEffect(() => {
    const getAllTransactions = async () => {
      const { data } = await api.get("/transactions");
    };
  }, []);
  return (
    <Container>
      <TabsComponent />
    </Container>
  );
}

export default Main;
