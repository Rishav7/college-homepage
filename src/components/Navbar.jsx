import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Programs", to: "/programs" },
  { label: "Placements", to: "/placements" },
  { label: "Campus", to: "/campus" },
  { label: "Admissions", to: "/admissions" },
];

export default function Navbar() {
  const nav = useNavigate();
  const [anchor, setAnchor] = React.useState(null);

  return (
    <Grid color="inherit" className="navbar-appbar">
      <Toolbar className="navbar-toolbar">
        <Container
          maxWidth="lg"
          className="navbar-container"
          sx={{
            display: "flex",
            alignItems: "strart",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={1.5}
            onClick={() => nav("/")}
            className="navbar-logo-stack"
            sx={{ cursor: "pointer" }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: { sm: 1 },
              }}
            >
              <img
                src="https://gnits.ac.in/wp-content/uploads/2024/08/logo-white-new-e1723283857619.png"
                alt="Best Engineering College in Hyderabad | G.Narayanamma Institute of Technology and Science"
                style={{
                  objectFit: "contain",
                }}
                decoding="async"
                className="default-logo"
              />
            </Box>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            className="navbar-links"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {links.map((l) => (
              <Button
                key={l.to}
                onClick={() => nav(l.to)}
                className="navbar-link-btn"
              >
                {l.label}
              </Button>
            ))}
            <Button
              variant="contained"
              onClick={() => nav("/admissions")}
              className="navbar-apply-btn"
            >
              Apply Now
            </Button>
          </Stack>
          {/* Mobile Menu Icon */}
          <IconButton
            className="navbar-menu-btn"
            onClick={(e) => setAnchor(e.currentTarget)}
            size="large"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
            PaperProps={{
              className: "navbar-menu-paper",
            }}
          >
            {links.map((l) => (
              <MenuItem
                key={l.to}
                onClick={() => {
                  setAnchor(null);
                  nav(l.to);
                }}
                className="navbar-menu-item"
              >
                {l.label}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => {
                setAnchor(null);
                nav("/admissions");
              }}
              className="navbar-menu-item navbar-menu-apply"
            >
              Apply Now
            </MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </Grid>
  );
}
