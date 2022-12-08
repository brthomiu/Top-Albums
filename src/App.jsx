import React, { useEffect, useState } from "react";
import * as API from "./api/api";
import AlbumCard from "./components/AlbumCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { InView } from "react-intersection-observer";
import { ThemeProvider } from "@mui/material/styles";
import * as styles from "./components/styles";

function App() {

  // State declarations
  const [albums, setAlbums] = useState({ feed: { entry: [] } }); // Album data from API
  const [isLoaded, setIsLoaded] = useState(false); // Tracks whether API data has been fetched
  const [showMore, setShowMore] = useState(10); // Tracks how many albums to display
  const [albumArray, setAlbumArray] = useState([]); // Stores filtered albums
  const [searchQuery, setSearchQuery] = useState([]); // Search query

  // Search function, sent to Header component props, updates searchQuery state
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Pagination function, triggered when user scrolls to bottom of page
  const handleShowMore = () => {
    setShowMore(showMore + 10);
  };

  // useEffect hook to fetch data from API, takes isLoaded state as dependency array
  useEffect(() => {
    API.connectToAPI(isLoaded, setAlbums, setIsLoaded);
  }, [isLoaded]);

  // useEffect hook to update albumArray state when searchQuery or showMore state changes
  useEffect(() => {
    setAlbumArray(
      API.createAlbumArray(albums.feed.entry, searchQuery).slice(0, showMore)
    );
  }, [isLoaded, showMore, searchQuery]);

  // Return loading message until the API call is complete
  if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {

    // Once data is loaded, render the content
    return (

      // Main box component to contain the app
      <div>
      <ThemeProvider theme={styles.theme}>
        <Box sx={{ maxWidth: "80%", margin: "auto", height: "100%" }}>
          
          {/* Header component with search bar */}
          <Header handleSearch={handleSearch} />

          {/* Grid component to display album cards */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            sx={{ margin: "0 0 1rem" }}
          >
            {/* Map through the array of albums and pass each album's data to an AlbumCard */}
            {albumArray.map((album) => {
              {
                return (
                  <AlbumCard
                    key={album.id.attributes["im:id"]}
                    details={album}
                  />
                );
              }
            })}
          </Grid>

          {/* Footer component with observation observer to trigger pagination when the footer enters the viewport */}
          <InView onChange={(inView) => handleShowMore()}>
            <Footer
              handleShowMore={handleShowMore}
              showMore={showMore}
              albumArrayLength={albumArray.length}
            />
          </InView>
        </Box>
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
