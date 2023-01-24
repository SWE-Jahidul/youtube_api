import { createStore } from "easy-peasy";
import PlaylistModel from "./playlist-model";
const store = createStore({
  playlist: PlaylistModel,
});

export default store;
