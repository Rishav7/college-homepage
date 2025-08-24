import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Stack,
} from "@mui/material";
import TestimonialCard from "../components/TestimonialCard";
import PlacementsSection from "../components/PlacementsSection";
import BewareFraudsters from "../components/BewareFraudsters";
import "./Home.css";

const videoSrc =
  "https://gnits.ac.in/wp-content/uploads/2024/09/Gnits_Video_07.webm";

// Home page
const Home = () => {
  const text = "Creating Future Leaders\nThrough Innovation and Excellence";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 1); // typing speed

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <Box>
      <Box className="home-notification">
        <Button href="#" className="home-notification-btn">
          Spot Admissions-2025
        </Button>
        Spot Admissions-Notification Adv.
      </Box>
      {/* Hero Section */}
      <Box className="home-hero">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={0}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} md={6}>
              <Box className="home-hero-text">
                <Typography
                  variant="h3"
                  fontWeight={700}
                  color="white"
                  className="home-hero-title"
                  style={{ whiteSpace: "pre-line" }} // allows \n as line break
                >
                  {displayedText}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className="home-hero-video-box"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <video
                  className="elementor-video"
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* BEWARE OF FRAUDSTERS Section */}
      <BewareFraudsters />
      {/* Placements Section */}
      <PlacementsSection />
      {/* People who made it to the top */}
      <Box py={{ xs: 5, md: 10 }}>
        <Container maxWidth="lg">
          <Box textAlign={{ xs: "left", sm: "center" }} mb={{ xs: 3, md: 5 }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2 }}
              color="warning.main"
              fontSize={{ xs: 12, sm: 16 }}
            >
              Voices
            </Typography>
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              fontSize={{ xs: 24, sm: 32 }}
            >
              What Our Alumni Say
            </Typography>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <TestimonialCard />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
