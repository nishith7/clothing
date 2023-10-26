import React, { useEffect, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";

const images = ["billboard.png", "supreme.jpg", "converse.jpg"]; // List of image file names
const imageInterval = 3000;

export default function HeroComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current image index to the next one
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, imageInterval);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentImage = images[currentImageIndex];
  return (
   
    // <Box
    //   sx={{
    //     // display: "flex",
    //     // flexWrap: "wrap",
    //     // justifyContent: "center",
    //   }}
    // >
      // <Paper elevation={20}>
      //   <img src={`/assets/${currentImage}`} width={1200} height={580} />
      // </Paper>
      <Grid>

        <Paper>
  <img
    src={`/assets/${currentImage}`}
    alt="Current Image"
    style={{
      maxWidth: "100%",
      height: "500px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  />
</Paper>

      </Grid>
      
    // </Box
  );
}

 // <div
    //   style={{
    //     display:"flex",
    //     justifyContent: "center",
    //     padding: "0 70px",
    //     // width: "80%",
    //     height: "50vh", // Adjust the height as needed
    //     // backgroundImage: `url(${backgroundImageUrl})`,
    //     // backgroundSize: "cover",
    //     // backgroundPosition: "center",
    //   }}
    // >
    //     <div
    //     style={{
    //       background: `url(${backgroundImageUrl})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       width: "100%",
    //       height: "100%",
    //     }}
    //   />
    //   {/* <Button variant="contained" color="primary" onClick={changeImage}>
    //     Next Image
    //   </Button> */}
    // </div>

    // const changeImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const backgroundImageUrl = `assets/${images[currentImageIndex]}`;
