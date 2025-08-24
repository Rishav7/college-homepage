import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
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
      <Navbar />

      <Outlet />
      <Footer />
    </Box>
  );
}
