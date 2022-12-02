import { useState } from "react";
import getPlayList from "../api";

const usePlaylist = () => {
  const [state, setState] = useState({
    playLists: {},
    recentPlayLists: [],
    favorites: [],
  });

  const getPlayListById = async (playListId , force= false) => {
    
    if( state.playLists[playListId] && !force ){
      return ;
    }
    
    let result =await getPlayList(playListId);
    let cid, ct;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelId;
      }

      return {
        channelId,
        title,
        description,
        thumbnail: medium,
        channelTitle,
        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playLists: {
        ...prev.playLists,
        [playListId]:{
          items : result, 
          playListId : playListId,
          channelId : cid,
          channelTitle :ct, 
        }
      },
    }));
  };

  const addToFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlayLists: [...prev, playlistId],
    }));
  };

  const getPlayListByIds = (ids = []) => {
    return ids.map((id) => state.playLists[id]);
  };

  return {
    playLists: state.playLists,
    favorites: getPlayListByIds(state.favorites),
    recentPlayLists: getPlayListByIds(state.recentPlayLists),
    getPlayListById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylist;

// useEffect(() => {
//   getPlayList("PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3").then((res) =>
//     console.log(res)
//   );
// }, []);
