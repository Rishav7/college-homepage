import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import "./Footer.css";

export default function Footer() {
  return (
    <Box className="footer-root">
      <Container maxWidth="xl">
        <Grid container spacing={4} direction={{ xs: "column", md: "row" }}>
          <Grid item xs={12} md={3}>
            {/* Social Links */}
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              className="footer-heading"
            >
              <u>Social Links</u>
            </Typography>
            <Stack direction="row" spacing={1} className="footer-social">
              <IconButton href="#" size="small" className="footer-social-btn">
                <Facebook fontSize="inherit" />
              </IconButton>
              <IconButton href="#" size="small" className="footer-social-btn">
                <Twitter fontSize="inherit" />
              </IconButton>
              <IconButton href="#" size="small" className="footer-social-btn">
                <LinkedIn fontSize="inherit" />
              </IconButton>
              <IconButton href="#" size="small" className="footer-social-btn">
                <Instagram fontSize="inherit" />
              </IconButton>
              <IconButton href="#" size="small" className="footer-social-btn">
                <YouTube fontSize="inherit" />
              </IconButton>
            </Stack>
            {/* Reach Us */}
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              className="footer-heading"
              style={{ marginTop: 16 }}
            >
              <u>Reach us</u>
            </Typography>
            <Typography variant="body2" className="footer-address">
              G. Narayanamma Institute of Technology & Science,
              <br />
              Autonomous, Shaikpet, Hyderabad – 500104
            </Typography>
            <Typography variant="body2" className="footer-contact">
              <Link
                href="tel:+914029565856"
                underline="hover"
                color="inherit"
                className="footer-contact-link"
              >
                +91-040-29565856
              </Link>
            </Typography>
            <Typography variant="body2" className="footer-contact">
              <Link
                href="mailto:Principal@gnits.ac.in"
                underline="hover"
                color="inherit"
                className="footer-contact-link"
              >
                Principal@gnits.ac.in
              </Link>
            </Typography>
            {/* Divider for mobile */}
            <Divider className="footer-divider" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              className="footer-heading"
            >
              <u>Bachelors Programs</u>
            </Typography>
            <Stack spacing={0.5} className="footer-list">
              <Typography variant="body2" className="footer-list-item">
                Computer Science Engineering
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Computer Science & Engineering (Artificial Intelligence &
                Machine Learning)
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Computer Science & Engineering (Data Science)
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Information Technology
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Electronics and Communication Engineering
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Electrical and Electronics Engineering
              </Typography>
              <Typography variant="body2" className="footer-list-item">
                Electronics and Telematics Engineering
              </Typography>
            </Stack>
            <Divider className="footer-divider" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              className="footer-heading"
            >
              <u>Quick Links</u>
            </Typography>
            <Stack spacing={0.5} className="footer-list">
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                About
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Academics
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Staff Directory
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Campus Life
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Placements
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Alumnae
              </Link>
            </Stack>
            <Divider className="footer-divider" />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              className="footer-heading"
            >
              <u>Students Corner</u>
            </Typography>
            <Stack spacing={0.5} className="footer-list">
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Exam Cell
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                ERP login
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                ECAP Login
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Exam Timetable
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                Latest News
              </Link>
              <Link
                href="#"
                underline="hover"
                color="inherit"
                className="footer-list-link"
              >
                WES – Online Verification
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Box className="footer-bottom">
        <Container maxWidth="xl">
          <Grid
            container
            alignItems="center"
            direction={{ xs: "column", md: "row" }}
            spacing={2}
          >
            <Grid item xs={12} md={6} className="footer-copyright">
              <Typography variant="body2">
                © 2025 G. Narayanamma Institute of Technology & Science .
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="footer-bottom-links">
              <Stack
                direction="row"
                spacing={2}
                className="footer-bottom-stack"
              >
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  DTBU
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  IQAC
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  NIRF
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  NAAC
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  NBA
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  AICTE
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  JNTUH
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  UGC
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  className="footer-bottom-link"
                >
                  Mandatory Disclosures
                </Link>
                <Box className="footer-bottom-arrow">
                  <span>↑</span>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
