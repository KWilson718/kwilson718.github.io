import {Card, CardContent, Typography, Chip} from "@mui/material"

export default function ProjectCard({ projectName="", projectDesc="", projectSkills=[] }) {
    return (
        <Card sx={{ minWidth: "15vw", maxWidth: "50vw", borderRadius: "0.5rem" }}>
            <CardContent>
                <Typography variant="h6" sx={{margin: "0.3rem"}}>{projectName}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{margin: "0.3rem"}}>
                    {projectDesc}
                </Typography>
                {projectSkills.map((skill) => (
                    <Chip label={skill} variant="outlined" sx={{margin: "0.3rem"}} />
                ))}
            </CardContent>
        </Card>
    );
}
