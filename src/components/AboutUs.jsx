import { Box, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Grid
      container
      spacing={3}
      width={900}
      height={400}
      border={1}
      borderRadius={4}
      // boxShadow={24}
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
      sx={{
        margin: "0 auto",
        marginTop: 4,
        marginBottom:4,
        backgroundColor: "rgba(255, 255, 255, 1)",
        boxShadow: "0px 5px 5px rgba(0, 0, 0, 1)",
      }}
    >
      <Grid item sm={6} justifyContent={"center"}>
        <Card>
          <CardMedia
        
            sx={{ height: 300, width: 430,aspectRatio:"auto" }}
            image="assets/aboutusimage.png"
            title="about us"
          />
        </Card>
      </Grid>
      <Grid marginTop={1} item sm={6} justifyContent={"center"}>
        <Typography variant="h4">"ENSHIELD: Transforming Garments and Uniforms</Typography>
        <br></br>
        <Typography variant="h8">
        In the ever-evolving world of fashion and workwear, ENSHIELD is at the forefront of designing and delivering top-quality uniforms. From corporate attire that brands businesses and ensures their personnel's safety to outfits for schools, colleges, hotels, hospitals, and security services, we're committed to meeting your needs.

Our experience in handling diverse environments and our dedicated team, equipped with advanced machinery, enable us to successfully complete projects. Our passion for what we do continues to fuel our ambition to grow and serve. Choose ENSHIELD for quality, style, and professionalism.
        </Typography>
      </Grid>
    </Grid>
  );
}
{
  /* </Paper> */
}
//   sx={{
//     display: "flex",
//     // flexWrap: "wrap",
//     justifyContent: "center",
//     alignItems: "center",
//   }}
{
  /* <Paper elevation={20}> */
}
