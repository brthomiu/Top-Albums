import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AlbumModal from "./AlbumModal";
import Typography from "@mui/material/Typography";
import { albumCardStyle, cardMediaStyle, cardContent } from "./styles";

const AlbumCard = (props) => {

  // Assign props to readable variables
  const albumRights = props.details.rights.label;
  const albumTitle = props.details["im:name"].label;
  const appleLink = props.details.id.label;
  const artistLink = props.details["im:artist"].href;
  const artistName = props.details["im:artist"].label;
  const releaseDate = props.details["im:releaseDate"].attributes.label;
  const thumbnail = props.details["im:image"][2].label;

  // Create object with album details to pass to Album Modal
  const albumDetails = {
    albumRights,
    albumTitle,
    appleLink,
    artistLink,
    artistName,
    releaseDate,
    thumbnail,
  };

  return (
    // Album card component
    <Card sx={albumCardStyle}>

      {/* Album cover thumbnail*/}
      <CardMedia
        sx={cardMediaStyle}
        image={thumbnail}
        alt={`${albumTitle} album cover`}
      />

      {/* Album and artist name */}
      <CardContent sx={cardContent}>
        <Typography component="div" sx={{ fontWeight: "600" }}>
          {albumTitle}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
          {artistName}
        </Typography>
      </CardContent>

      {/* Details modal */}
      <CardActions sx={{ flexDirection: "column" }}>
        <AlbumModal albumDetails={albumDetails} />
      </CardActions>
    </Card>
  );
};

export default AlbumCard;
