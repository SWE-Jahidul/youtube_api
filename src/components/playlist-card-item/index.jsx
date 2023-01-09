import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "react-router-dom";

export default function PlayListCard({
  playlistThumbnil,
  playlistTitle,
  channelTitle,
  playlistId
}) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnil.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="h5" color="text.secoundary">
          {channelTitle}
        </Typography>

 

      </CardContent>
      <Box
        sx={{
          flexGrow: 1,
        }}
      ></Box>

      <CardActions
        disableSpacing
        sx={{
          mt: "auto",
        }}
      >
       
        <Button to= {`/youtubeplayer/${playlistId}`} component={Link}>
        <Stack drection={'row'} spacing={1} alignItems={'center'}>
            {/* <PlayCircleOutline />  */}
            <Typography variant="body2" fontWeight={600}>Start Tutorials</Typography>
         </Stack>
        </Button>
      </CardActions>
    </Card>
  );
}
