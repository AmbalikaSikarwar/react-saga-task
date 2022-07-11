import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function PageNotFound() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <Box className="page-not-found">
      <Button onClick={() =>back}>Go back</Button>
        <h2>404</h2>
        <h5>Not Found!</h5>
        <p>Sorry we can't find what you're looking for!</p>     
      </Box>
    </div>
  );
}
