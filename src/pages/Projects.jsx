import {Box, Grid} from "@mui/material"

import ItemCard from "../components/itemCard";

import projects from "../data/projects.json";

export default function Projects () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ItemCard
                            itemName={project.name}
                            itemDur={project.duration}
                            itemDesc={project.description}
                            itemSkills={project.skills}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}