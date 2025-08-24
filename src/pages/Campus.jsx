import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function Campus() {
  const campusItems = [
    {
      title: "Library",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },

    {
      title: "Auditorium",
      img: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&h=400&fit=crop",
    },
    {
      title: "Sports",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=400&fit=crop",
    },
    {
      title: "Labs",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
    {
      title: "Cafeteria",
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=400&fit=crop",
    },

    {
      title: "Hostel",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    },
  ];

  return (
    <Box className="campus-root">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={900}
          className="campus-title"
          gutterBottom
        >
          Campus Life
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {campusItems.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper className="campus-card" sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                  }}
                />
                <Box className="campus-card-content" sx={{ p: 2 }}>
                  <Typography fontWeight={800} className="campus-card-title">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="campus-card-desc"
                  >
                    Modern, safe and inclusive facilities.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
