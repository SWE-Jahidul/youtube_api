import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PlaylistFrom = ({open, handleClose, getPlayListId}) => {
  const [state, setState] = useState('');

  const handleSubmit = () => {
    // TODO handle url later
    if (!state) {
      alert("Invalid State");
    } else {
      getPlayListId(state);
      setState('');
      handleClose();
    } 
  };

  return (
    <Dialog onClose={handleClose} open ={open} >
      <DialogTitle>Add PlayList </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new Playlist please insert the playlist id or playlist link.
          please make sure the link is correct.Otherwise we won't able to fetch
          the playlist information.
        </DialogContentText>
        <TextField
        
          autoFocus
          margin="dense"
          label="Playlist ID or Link"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}

        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistFrom;
