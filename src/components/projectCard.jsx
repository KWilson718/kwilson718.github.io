import {Card, CardContent, Typography} from "@mui/material"

export default function ProjectCard({ projectName, projectDesc }) {
    return (
        <Card sx={{ minWidth: "15vw", maxWidth: "50vw" }}>
            <CardContent>
                <Typography variant="h6">{projectName}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {projectDesc}
                </Typography>
            </CardContent>
        </Card>
    );
}
