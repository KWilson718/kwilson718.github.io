import { Card, CardContent, Typography, Chip, Box, Link } from "@mui/material";

export default function ItemCard({
  itemName = "",
  itemType = "",
  itemDur = "",
  itemLoc = "",
  itemDesc = "",
  itemSkills = [],
  itemSource = "",
}) {
  return (
    <Card sx={{ minWidth: "15vw", maxWidth: "50vw", borderRadius: "0.5rem" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="cardTitle1" sx={{ margin: "0.3rem" }}>
          {itemName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemDur}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemType}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemLoc}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemDesc}
        </Typography>

        {/* Center the Chip group */}
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
          {itemSkills.map((skill, idx) => (
            <Chip key={idx} label={skill} variant="outlined" sx={{ margin: "0.3rem" }} />
          ))}
        </Box>

        {itemSource && <Link href={itemSource} color="inherit">View More</Link>}
      </CardContent>
    </Card>
  );
}