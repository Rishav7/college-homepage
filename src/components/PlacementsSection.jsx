import React from "react";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
// import { useCompanyLogos } from "../hooks/useData";

export default function PlacementsSection() {
  // const companyLogos = useCompanyLogos();
  return (
    <Box sx={{ bgcolor: "#e6edf2", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={800}
              color="#005c4b"
              gutterBottom
              sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }}
            >
              Placements
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: { xs: 15, md: 18 } }}
            >
              At GNITS, the commitment to fostering career-ready graduates is
              evident through its robust placement program. The institution
              boasts a proactive Training and Placement Cell that coordinates
              with leading companies across various sectors.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 3 }}
              sx={{ mt: 3 }}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="warning.main"
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                >
                  ₹ 53 LPA
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Highest Package
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="#005c4b"
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                >
                  70%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placement Percentage
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="#005c4b"
                  sx={{ fontSize: { xs: 20, md: 24 } }}
                >
                  560
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placed in 2025
                </Typography>
              </Box>
            </Stack>
            <Button
              variant="contained"
              color="warning"
              sx={{
                mt: 4,
                fontWeight: 700,
                borderRadius: 1,
                width: { xs: "100%", sm: "auto" },
                fontSize: { xs: 16, md: 18 },
              }}
              href="#"
            >
              Placements &nbsp;↗
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* <Box sx={{ overflow: "hidden", width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "max-content",
                  animation: "scrollRight 20s linear infinite",
                }}
              >
                {[...companyLogos, ...companyLogos].map((logo, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={logo.src}
                    alt={logo.alt}
                    sx={{
                      height: { xs: 32, sm: 40 },
                      mx: { xs: 0.5, sm: 2 },
                      my: { xs: 0.5, sm: 1 },
                      width: "auto",
                      maxWidth: 80,
                    }}
                  />
                ))}
              </Box>
            </Box> */}

            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
