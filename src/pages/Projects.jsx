import {Box, Grid} from "@mui/material"

import ProjectCard from "../components/projectCard";

import projects from "../data/projects.json";

export default function Projects () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ProjectCard
                            projectName={project.name}
                            projectDesc={project.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}