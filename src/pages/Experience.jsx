import {Box, Grid} from "@mui/material"

import experiences from "../data/experiences.json";

import ItemCard from "../components/itemCard";

export default function Experience () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                {experiences.map((experience, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ItemCard
                            itemName={experience.name}
                            itemType={experience.type}
                            itemDur={experience.duration}
                            itemDesc={experience.description}
                            itemSkills={experience.skills}
                            itemSource={experience.source}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}