import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProgramCard from "../components/ProgramCard";
import { usePrograms } from "../hooks/useData";
import "./Home.css";

export default function Programs() {
  const programs = usePrograms();

  return (
    <Box className="programs-root" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h4"
          fontWeight={900}
          mb={{ xs: 3, md: 4 }}
          textAlign={{ xs: "left", sm: "center" }}
          className="programs-title"
        >
          All Programs
        </Typography>

        {/* Programs Grid */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {programs.map((program) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={program.id}>
              <ProgramCard program={program} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
