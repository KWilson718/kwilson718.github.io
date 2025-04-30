import {Box, Grid} from "@mui/material"

import ProjectCard from "../components/projectCard";

const projects = [
    { name: "TestName", description: "This is a sample project about X." },
    { name: "TestName2", description: "Another project that does Y." },
    { name: "TestName3", description: "This one is a React app that does Z." },
    { name: "TestName4", description: "A helpful tool built with Node.js." },
    { name: "TestName5", description: "An experimental UI concept." },
  ];

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