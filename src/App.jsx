import { CssBaseline, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import getPlayList from "./api";
import Navbar from "./components/navbar";
import PlayListCard from "./components/playlist-card-item";
import usePlaylist from "./hooks/usePlaylist";

const HomePage = ({ playListArray }) => {
  console.log("-----", playListArray);
  return (
    <Container maxWidth="lg" sx={{ marginTop: 16 }}>
      {playListArray.length > 0 && (
        <Grid
          container
          sx={{
            alignItems: "stretch",
            gap: 2,
          }}
        >
          {playListArray.map((item) => (
            <Grid item sx={12} md={6} lg={4} mb={2}>
              <PlayListCard
                key={item.playListId}
                playlistId={item.playListId}
                playlistThumbnil={item.playlistThumbnil}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const NotFound = () => (
  <Container maxWidth="lg" sx={{ marginTop: 16 }}>
    <Typography variant="h2" align="center">
      404 Page Not Found
    </Typography>
  </Container>
);

const YoutubePlayerPage = ({ playLists }) => {
  const { playListId } = useParams();
  const current = playLists[playListId];
  if (!current) return;
  return (
    <Container maxWidth="lg" sx={{ marginTop: 16 }}>
      <Typography variant="h2" align="center">
        {current.playlistTitle}
        <Typography variant="body1">{current.playlistDescription}</Typography>
      </Typography>
    </Container>
  );
};
const App = () => {
  const { getPlayListById, playLists, error, loding } = usePlaylist();

  const playListArray = Object.values(playLists);

  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navbar getPlayListById={getPlayListById} />

        <Routes>
          {" "}
          <Route
            path="/"
            element={<HomePage playListArray={playListArray} />}
          />
          <Route
            path="/youtubeplayer/:playListId"
            element={<YoutubePlayerPage playLists={playLists} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
