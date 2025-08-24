import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function BewareFraudsters() {
  return (
    <Box sx={{ bgcolor: "#fff3e6", py: 5 }}>
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <img
          src="https://gnits.ac.in/wp-content/uploads/2024/08/logo-white-new-e1723283857619.png"
          alt="GNITS Logo"
          style={{ height: 70, marginBottom: 8 }}
        />
        <Typography variant="h4" fontWeight={900} color="primary" gutterBottom>
          BEWARE OF FRAUDSTERS
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          GNITS does <b>not engage any agents or consultants</b> for admissions.
          We strictly follow the guidelines prescribed by TGCHE and the{" "}
          <b>Government of Telangana</b> for the admission process.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please do not be misled by fraudsters. The management is not
          responsible for any dealings made through unauthorized individuals.
        </Typography>
        <Typography variant="body1">
          If you come across any such instances, kindly report them to the
          college authorities at:&nbsp;
          <span style={{ color: "#d32f2f", fontWeight: 700 }}>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            040-29565856
          </span>
        </Typography>
      </Container>
    </Box>
  );
}
