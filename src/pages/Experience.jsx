import {Box, Grid} from "@mui/material"

import experiences from "../data/experiences.json";

import ItemCard from "../components/itemCard";

export default function Experience () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {experiences.map((experience, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ItemCard
                            itemName={experience.name}
                            itemDur={experience.duration}
                            itemLoc={experience.location}
                            itemDesc={experience.description}
                            itemSkills={experience.skills}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}