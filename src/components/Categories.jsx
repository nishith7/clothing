import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "./ProductCard";
import shoeData from '../data/shoeData'
import jerseyData from '../data/jerseyData';
import studsData from '../data/studsData'

export default function Categories() {
 
  
  const [selectedCategory,setSelectedCategory] = useState(shoeData);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const myData = selectedCategory;
  return (
    <>
      <Typography
        marginTop={8}
        variant="h4"
        fontFamily={"lato-bold"}
        fontSize={"28px"}
        fontWeight={400}
        lineHeight={"33.6px"}
        display={"flex"}
        justifyContent={"center"}
      >
        FEATURED COLLECTIONS
      </Typography>
      <Grid marginTop={6} container spacing={2} justifyContent={"center"}>
        <Grid item></Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange(shoeData)}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,

              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
            }}
          >
            Enshield safety shoes
            {/* shoes */}
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            // variant={()=>handleCategoryChange('jerseyData')}
            onClick={()=>handleCategoryChange(jerseyData)}
            sx={{
              color: "black",
              fontSize: 16,
              // bgcolor: hospitalityData ? "rgba(125, 125, 125, 0.8)" : "white",
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
                // borderColor: shoeData ? undefined : "black",
              },
            }}
          >
            {/* Hospitality */}
            {/* jersey */}
            Protective workwear
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange(studsData)}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
            }}
          >
            Hospitality
            {/* Football Shoes */}
          </Button>
        </Grid>
        
        
      </Grid>
      <ProductCard myData={myData}/>
     
    </>
  );
}



  // const [shoeData, setShoeData] = useState(true);
  // const [hospitalityData, setHospitalityData] = useState(false);
  // const showHospitality = () => {
  //   setHospitalityData(true);
  //   setShoeData(false);
  // };
  // const showShoe = () => {
  //   setShoeData(true);
  //   setHospitalityData(false);
  // };

   {/* {shoeData ? <ProductCard myData={shoesData} /> : null}
      {hospitalityData ? <ProductCard myData={jerseyData} /> : null} */}
      {/* <AboutUs /> */}

      {/* <Grid item>
          <Button
            variant={hospitalityData ? "outlined" : "contained"}
            onClick={showHospitality}
            sx={{
              color: "black",
              fontSize: 16,
              bgcolor: hospitalityData ? "rgba(255, 195, 0, 1)" : "white",
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(255,195,0,1)",
                borderColor: shoeData ? undefined : "black",
              },
            }}
          >
            T-Shirts
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Others
          </Button>
        </Grid> */}

         // const theme = useTheme();

  // const CategoryButtons = styled(Button)(({theme}) => ({
  //   // bo
  //   backgroundColor: theme.palette.primary.main,
  //   // borderColor:"rgba(246,169,17,255)",
  // }));
  // console.log(theme);
  // const shoesData = [
  //   {
  //     id: 0,
  //     type: "Enfield Shoe",
  //     // type:"Sports Shoes",

  //     name: "Enfield Blue Protective Shoe",
  //     // name:"Nike Shoe",
  //     imgSrc: "assets/firstshoe.png",
  //     // imgSrc:"assets/nike.jpg",
  //     price: 2000,
  //     description: "very comfortable",
  //   },
  //   {
  //     id: 1,
  //     type: "Enfield Shoe",
  //     // type:"Sports Shoes",
  //     // name:"Nike Shoe",
  //     name:"Enfield Blue Protective Shoe",
  //     imgSrc: "assets/secondshoe.png",
  //     // imgSrc:"assets/nike.jpg",
  //     price: 1500,
  //     description: "very comfortable",
  //   },
  //   {
  //     id: 2,
  //     type: "Enfield Shoe",
  //     // type:"Sports Shoes",
  //     name:"Nike Shoe",
  //     name:"Enfield High Rise Protective Shoe",
  //     imgSrc: "assets/thirdshoe.png",
  //     // imgSrc:"assets/nike.jpg",
  //     price: 2500,
  //     description: "very comfortable",
  //   },
  //   {
  //     id: 3,
  //     type: "Enfield Shoe",
  //     // type:"Sports Shoes",
  //     // name:"Nike Shoe",
  //     name:"Enfield Beige Protective Shoe",
  //     imgSrc: "assets/fourthshoe.png",
  //     // imgSrc:"assets/nike.jpg",
  //     price: 3000,
  //     description: "very comfortable",
  //   },
  // ];