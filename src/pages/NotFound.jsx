import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <Container maxWidth="sm" className="notfound-root">
      <Typography variant="h2" fontWeight={900} className="notfound-title">
        404
      </Typography>
      <Typography color="text.secondary" className="notfound-desc">
        The page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        size="large"
        className="notfound-btn"
        onClick={() => nav("/")}
      >
        Go Home
      </Button>
    </Container>
  );
}
