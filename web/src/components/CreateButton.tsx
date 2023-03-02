import React from "react";

import { Link } from "@mui/material";

export interface ICreateButtonProps {
  link: string;
  title: string;
}
function CreateButton({ link, title }: ICreateButtonProps) {
  return (
    <div style={{ marginTop: 16, marginBottom: 16 }}>
      <Link
        href={link}
        underline="hover"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          borderRadius: 4,
          backgroundColor: "#1976d2",
          color: "#fff",
          fontSize: 16,
          width: 150,
          margin: "0 auto",
        }}
      >
        {title}
      </Link>
    </div>
  );
}

export default CreateButton;
