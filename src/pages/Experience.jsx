import {Box, Grid} from "@mui/material"

import experiences from "../data/experiences.json";

import ExperienceCard from "../components/experienceCard";

export default function Experience () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {experiences.map((experience, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <ExperienceCard
                            experienceName={experience.name}
                            experienceDur={experience.duration}
                            experienceLoc={experience.location}
                            experienceDesc={experience.description}
                            experienceSkills={experience.skills}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}