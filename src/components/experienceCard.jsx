import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

export default function ExperienceCard({
  experienceName = "",
  experienceDur = "",
  experienceLoc = "",
  experienceDesc = "",
  experienceSkills = [],
}) {
  return (
    <Card sx={{ minWidth: "15vw", maxWidth: "50vw", borderRadius: "0.5rem" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="cardTitle1" sx={{ margin: "0.3rem" }}>
          {experienceName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {experienceDur}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {experienceLoc}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {experienceDesc}
        </Typography>

        {/* Center the Chip group */}
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
          {experienceSkills.map((skill, idx) => (
            <Chip key={idx} label={skill} variant="outlined" sx={{ margin: "0.3rem" }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
