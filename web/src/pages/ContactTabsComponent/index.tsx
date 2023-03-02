import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs } from "@mui/material";
import Contact from "../Contact";
import { a11yProps, TabPanel } from "../ClientTabsComponent";
import ListClient from "../Client/List";

function ContactTabsComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "80%",
        borderRadius: 4,
        margin: "0 auto",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Clients" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Contact />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListClient hideLinkedCountList={true} />
      </TabPanel>
    </Box>
  );
}

export default ContactTabsComponent;
