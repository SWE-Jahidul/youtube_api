import axios from "axios";

const key = "AIzaSyCM6ujAY_wJUkwVFlVID2-kZoWT09biuV0";

const getPlayList = async (playListId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playListId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result , ...data.items ]
  if (data.nextPageToken) {
    result =  getPlayList(playListId, data.nextPageToken,result)  }

  return result;
};  

export default getPlayList;
