import { useState } from "react"
import { Box, Typography, Divider, CircularProgress } from "@mui/material"
import { Document, Page, pdfjs } from "react-pdf"

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export default function Resume() {
    const [numPages, setNumPages] = useState(null)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h1">Resume</Typography>
            <Divider sx={{ margin: "0.5rem" }} />
            <Document
                file="/pdfs/resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<CircularProgress />}
                error={<Typography color="error">Failed to load PDF.</Typography>}
            >
                {Array.from(new Array(numPages), (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={1000}
                    />
                ))}
            </Document>
        </Box>
    )
}
