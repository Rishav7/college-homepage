import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import TopStrip from "./TopStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <TopStrip />
      <Navbar />
      <Box
        component="main"
        sx={{
          flex: 1,
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 2, sm: 3 },
          maxWidth: { xs: "100%", md: "1200px" },
          mx: "auto",
          width: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
