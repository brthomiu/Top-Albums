import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CardMedia } from "@mui/material";
import {
  modalBoxStyle,
  albumDetailStyle,
  buttonStyle,
  cardMediaStyle,
} from "./styles";

export default function AlbumModal(props) {

  //State and functions to handle modal open/close
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      {/* Button to open modal */}
      <Button onClick={handleOpen}>
        <Typography sx={{ color: "#000" }} variant="h4">
          More
        </Typography>
      </Button>

      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Details"
        aria-describedby="Show album details"
      >
        {/* Modal content box*/}
        <Box sx={modalBoxStyle}>
          {/* Artist name */}
          <Typography variant="h5" sx={albumDetailStyle}>
            {props.albumDetails.artistName}
          </Typography>

          {/* Album title */}
          <Typography variant="h6">{props.albumDetails.albumTitle}</Typography>
          <CardMedia
            sx={cardMediaStyle}
            image={props.albumDetails.thumbnail}
            alt={`${props.albumDetails.albumTitle} album cover`}
          />

          {/* Links to external sites */}
          <Button
            sx={buttonStyle}
            href={`https://www.discogs.com/search/?q=${props.albumDetails.artistName}+${props.albumDetails.albumTitle}&type=all&format_exact=Album`}
            target="_blank"
            rel="noreferrer"
            variant="h6"
          >
            Discogs
          </Button>
          <Button
            sx={buttonStyle}
            href={`https://rateyourmusic.com/search?searchterm=${props.albumDetails.artistName} ${props.albumDetails.albumTitle}&searchtype=`}
            target="_blank"
            rel="noreferrer"
            variant="h6"
          >
            RateYourMusic
          </Button>
          <Button
            sx={buttonStyle}
            href={`https://www.youtube.com/results?search_query=${props.albumDetails.artistName} ${props.albumDetails.albumTitle}`}
            target="_blank"
            rel="noreferrer"
            variant="h6"
          >
            YouTube
          </Button>

          {/* Album rights and date  */}
          <Typography sx={{ mt: 2, color: "#000" }}>
            {props.albumDetails.albumRights}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
