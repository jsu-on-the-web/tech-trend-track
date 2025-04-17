import Image from "next/image";
import { Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="w-full">
      <div id="body">
        <Paper sx={
          {
            padding: "2vw",
            height: '100vh',
            width: '100vw',
            backgroundColor: "thistle",
            display: "flex"
          }
        } >
          <Typography variant="h1" className="text-center">
            Hello world!
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
