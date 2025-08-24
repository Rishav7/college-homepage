import React from "react";
import { Box, Container, Typography } from "@mui/material";
import RecruiterGrid from "../components/RecruiterGrid";
import { useRecruiters } from "../hooks/useData";

export default function Placements() {
  const recruiters = useRecruiters();

  return (
    <Box py={{ xs: 4, md: 8 }} sx={{ bgcolor: "#f7f9fc" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={900}
          mb={{ xs: 3, md: 4 }}
          fontSize={{ xs: 24, sm: 28, md: 32 }}
          textAlign={{ xs: "left", sm: "center" }}
        >
          Placements & Recruiters
        </Typography>

        {/* Pass recruiters to responsive grid */}
        <RecruiterGrid recruiters={recruiters} />
      </Container>
    </Box>
  );
}
