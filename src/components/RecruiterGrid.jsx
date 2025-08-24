import React from "react";
import { Avatar, Grid, Paper, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function RecruiterGrid({ recruiters }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2}>
        {recruiters.map((r) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={r.id}>
            <Stack alignItems="center" spacing={1.2}>
              <Avatar
                variant="rounded"
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: grey[100],
                  color: grey[800],
                  fontWeight: 800,
                }}
              >
                {r.name[0]}
              </Avatar>
              <Typography variant="body2" fontWeight={700}>
                {r.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
