import { CssBaseline } from "@mui/material";
import { useEffect } from "react";
import getPlayList from "./api";
import Navbar from "./components/navbar";
import usePlaylist from "./hooks/usePlaylist";

const App = () => {
  const { getPlayListById, playLists, error, loding } = usePlaylist();

  useEffect(() => {
    getPlayListById("PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP");
  }, []);

  console.log(playLists);
  return (
    <>
      <CssBaseline />

      <div>
        <Navbar />
      </div>
    </>
  );
};

export default App;
