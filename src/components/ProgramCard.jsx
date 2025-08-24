// ProgramCard component
import React from "react";
import { Avatar, Card, CardActionArea, Stack, Typography } from "@mui/material";
import { amber } from "@mui/material/colors";
import CodeIcon from "@mui/icons-material/Code";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import BarChartIcon from "@mui/icons-material/BarChart";
import ScienceIcon from "@mui/icons-material/Science";

const ICONS = {
  cse: <CodeIcon />,
  ece: <ElectricalServicesIcon />,
  mba: <BarChartIcon />,
  mtech: <ScienceIcon />,
};

export default function ProgramCard({ program }) {
  return (
    <Card>
      <CardActionArea sx={{ p: 3 }}>
        <Stack spacing={1.5}>
          <Avatar sx={{ bgcolor: amber[50], color: amber[800] }}>
            {ICONS[program.icon] || <CodeIcon />}
          </Avatar>
          <Typography variant="h6" fontWeight={800}>
            {program.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {program.desc}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
