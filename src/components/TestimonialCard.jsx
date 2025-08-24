// TestimonialCard component
import React from "react";
import { Avatar, Paper, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function TestimonialCard({ t }) {
  const name = t?.name || "Anonymous";

  return (
    <Paper sx={{ p: 3, height: "100%" }}>
      <Stack spacing={1.5}>
        <Stack direction="row" spacing={1.2} alignItems="center">
          <Avatar>
            <StarIcon />
          </Avatar>
          <div>
            <Typography fontWeight={800}>{name}</Typography>
          </div>
        </Stack>
      </Stack>
    </Paper>
  );
}
