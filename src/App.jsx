import { CssBaseline, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getPlayList from "./api";
import Navbar from "./components/navbar";
import PlayListCard from "./components/playlist-card-item";
import usePlaylist from "./hooks/usePlaylist";

const HomePage = ({ playListArray }) => {
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
                key={item.playlistId}
                playlistId={item.playlistId}
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

const YoutubePlayerPage = () => {
  <Container maxWidth="lg" sx={{ marginTop: 16 }}>
    <Typography variant="h2" align="center">
      404 Page Not Found 888 Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. A atque perspiciatis laborum quo ut dolorum temporibus dignissimos
      inventore perferendis autem omnis explicabo doloribus natus, harum
      deleniti obcaecati iusto ipsa esse.
    </Typography>
  </Container>;
};

const App = () => {
  const { getPlayListById, playLists, error, loding } = usePlaylist();

  const playListArray = Object.values(playLists);

  console.log(playListArray);
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navbar getPlayListById={getPlayListById} />

        <Routes>
          <Route path="/youtubeplayer" element={<YoutubePlayerPage />} />

          <Route
            path="/"
            element={<HomePage playListArray={playListArray} />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
