import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

export default function Admissions() {
  return (
    <Box className="admissions-root" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              fontWeight={900}
              gutterBottom
              className="admissions-title"
            >
              Admissions 2025
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: 3 }}
              className="admissions-desc"
            >
              Apply to our undergraduate and postgraduate programs. Scholarships
              are available for meritorious students.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button variant="contained" fullWidth>
                Start Application
              </Button>
              <Button variant="outlined" fullWidth>
                Download Prospectus
              </Button>
            </Stack>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "background.paper",
              }}
              className="admissions-contactpaper"
            >
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOnIcon color="primary" />
                  <Typography>123 College Road, City</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <EmailIcon color="primary" />
                  <Typography>admissions@college.edu</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PhoneIcon color="primary" />
                  <Typography>+91 98765 43210</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LanguageIcon color="primary" />
                  <Typography>www.college.edu</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
