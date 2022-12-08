// API Address
export const API_ADDRESS =
  "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

// Function to fetch data from the API, only runs if the data is not already in the state
export const connectToAPI = (loadState, setDataState, setLoadState) => {
  if (!loadState) {
    fetch(`${API_ADDRESS}`, {})
      .then((res) => res.json())
      .then((data) => {
        setDataState(data);
        setLoadState(true);
      })
      .catch(() => console.log("Failed to connect to API"));
  }
};

// Function to filter albums based on search query
export const createAlbumArray = (data, query) => {
  let array = [];
  data.map((album) => {
    if (
      album["im:name"].label.toLowerCase().includes(query) ||
      (album["im:artist"].label.toLowerCase().includes(query) &&
        query.length > 0)
    )
      array.push(album);
  });
  return array;
};