import { action, thunk } from "easy-peasy";

import getPlayList from "../api";

const PlaylistModel = {
  items: [],
  id: "",
  title: "",
  description: "",
  thumbnil: "",
  channelId: "",
  ChannelTitle: "",
  setPlaylistData: action((state, payload) => {
    state = { ...payload };
  }),
  getPlayListData: thunk(async ({ setPlaylistData }, payload) => {
    const data = await getPlayList(payload);
    setPlaylistData(data);
  }),
};

export default PlaylistModel;
