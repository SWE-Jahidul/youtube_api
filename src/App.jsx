import { useEffect } from "react";
import getPlayList from "./api";
import usePlaylist from "./hooks/usePlaylist";

const App = () =>{

    const {getPlayListById, playLists} =  usePlaylist()



    useEffect (() => {
        getPlayListById('PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP')
    }, [])


    console.log(playLists);
    return(
        <div> 
            <h1> hello world 
                 </h1>
        </div>
    )
}


export default App;