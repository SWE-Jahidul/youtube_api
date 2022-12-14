import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import getPlayList from "./api";
import Navbar from "./components/navbar";
import PlayListCard from "./components/playlist-card-item";
import usePlaylist from "./hooks/usePlaylist";

const App = () => {
 const { getPlayListById, playLists, error, loding } = usePlaylist();


const playListArray = Object.values(playLists)


  return (
    <>
      <CssBaseline />

      <div>
        <Navbar getPlayListById={getPlayListById} />
    
    {
     playListArray.length > 0 && (

      playListArray.map((item) => <PlayListCard  
      
      // key={item.id}
      // playlistThumbnil={item.playlistThumbnil}
      // playlistTitle = { item.playListArray }
      // channelTitle = { item.channelTitle}
      
      /> )
     )
    }
    
      </div>
    </>
  );
};

export default App;
