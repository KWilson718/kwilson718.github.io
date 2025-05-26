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
        {itemName && <Typography variant="cardTitle1" sx={{ margin: "0.3rem" }}>
          {itemName}
        </Typography>}
        {itemDur && <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemDur}
        </Typography>}
        {itemType && <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemType}
        </Typography>}
        {itemLoc && <Typography variant="body2" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemLoc}
        </Typography>}
        {itemDesc && <Typography variant="body1" color="text.secondary" sx={{ margin: "0.3rem" }}>
          {itemDesc}
        </Typography>}

        {/* Center the Chip group */}
        {(itemSkills.length > 0) && <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
          {itemSkills.map((skill, idx) => (
            <Chip key={idx} label={skill} variant="outlined" sx={{ margin: "0.3rem" }} />
          ))}
        </Box>}

        {itemSource && <Link href={itemSource} color="inherit">View Project</Link>}
      </CardContent>
    </Card>
  );
}