import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function PlayListCard({
  playlistThumbnil,
  playlistTitle,
  channelTitle,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={playlistThumbnil.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {playlistTitle}
        </Typography>
        <Typography variant="h5" color="text.secoundary">
          {channelTitle}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button>Play</Button>
      </CardActions>
    </Card>
  );
}
