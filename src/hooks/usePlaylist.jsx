import { useEffect, useState } from "react";
import getPlayList from "../api";
import storage from "../utils/Storage";

const STORAGE_KEY = "cy__playlist__state";

const usePlaylist = () => {
  const [state, setState] = useState({
    playLists: {},
    recentPlayLists: [],
    favorites: [],
  });

  const [error, setError] = useState("");
  const [loding, setloding] = useState(false);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    storage.save(STORAGE_KEY, state);
  }, [state]);

  const getPlayListById = async (playListId, force = false) => {
    if (state.playLists[playListId] && !force) {
      return;
    }

    setloding(true);
    try {
      const playlist = await getPlayList(playListId);
      setError("");
      setState((prev) => ({
        ...prev,
        playLists: {
          ...prev.playLists,
          [playListId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data?.error?.message || "Something wenr wrong!");
    } finally {
      setloding(false);
    }
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
    error,
    loding,
    getPlayListById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylist;
