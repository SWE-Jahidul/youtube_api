import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useState } from "react";
import PlaylistFrom from "../playlist-form";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
const Navbar = ({ getPlayListById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlayListId = (playlistId) => {
    getPlayListById(playlistId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h6">Clean Youtube</Typography>
              </Link>
              <Link href="https://google.com" target={"_blank"}
              
              sx={{ textDecoration : 'none' , color:'black'}}
              >
                <Typography variant="body1">by Jahidul Islam </Typography>
              </Link>
            </Stack>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Playlist
            </Button>

            <PlaylistFrom
              open={open}
              handleClose={handleClose}
              getPlayListId={getPlayListId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
