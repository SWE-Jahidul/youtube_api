import axios from "axios";

// const key = "AIzaSyCM6ujAY_wJUkwVFlVID2-kZoWT09biuV0";
const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const getPlayListItem = async (playListId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playListId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlayList(playListId, data.nextPageToken, result);
  }

  return result;
};

const getPlayList = async (playListId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${key}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlayListItem(playListId);

  const {
    channelId,
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelTitle,
  } = data?.items[0]?.snippet;

  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    playListId,
    playlistTitle,
    playlistDescription,
    playlistThumbnil : thumbnails.default,
    channelId,
    channelTitle,
    playlistItems
  }
};

export default getPlayListItem;
