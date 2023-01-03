import { CssBaseline, Grid } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useEffect } from "react";
import getPlayList from "./api";
import Navbar from "./components/navbar";
import PlayListCard from "./components/playlist-card-item";
import usePlaylist from "./hooks/usePlaylist";

const App = () => {
  const { getPlayListById, playLists, error, loding } = usePlaylist();
 
  const playListArray = Object.values(playLists);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 16 }}>
        <Navbar getPlayListById={getPlayListById} />
        {playListArray.length > 0 && (
          <Grid
            container
            sx={{
              alignItems: "stretch",
              gap:2
            }}
          >
            {playListArray.map((item) => (
              <Grid item sx={12} md={6} lg={4} mb={2}>
                <PlayListCard
                  key={item.id}
                  playlistThumbnil={item.playlistThumbnil}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default App;
