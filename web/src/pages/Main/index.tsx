import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container, TABLE } from "../../styles";
import Spinner from "../../components/Spinner";
import TabsComponent from "../ClientTabsComponent";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Container>
      <Spinner loading={isLoading} />
      {!isLoading && <TabsComponent />}
    </Container>
  );
}

export default Main;
