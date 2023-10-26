import { Typography } from "@mui/material";
import ProductCard from "./ProductCard";

export default function DealOftheDay() {
  const customStyle = {
    marginTop: 100,
    // justifyItem: "center",
  };

  const myData = [
    {
        id:0,
      name: "Blue T-Shirt",
      imgSrc: "assets/blueTee.png",
      price: 200,
      description: "Good material, minimal design.",
    },
    {
        id:1,
      name: "Chef's Coat",
      imgSrc: "assets/chef.png",
      price: 200,
      description: "Good material, minimal design.",
    },
    {
        id:2,
      name: "Defense Uniform",
      imgSrc: "assets/militaryUniform.png",
      price: 200,
      description: "Good material, minimal design.",
    },
    {
        id:3,
      name: "Hi-Vis Reflective Vest",
      imgSrc: "assets/protectiveWear.png",
      price: 200,
      description: "Good material, minimal design.",
    },
  ];

  
  return (
    <>
      <div style={customStyle}>
        <Typography
         variant="h4"
         fontFamily={"lato-bold"}
         fontSize={"28px"}
         fontWeight={400}
         lineHeight={"33.6px"}display={"flex"} justifyContent={"center"}>
         OUR BESTSELLERS
        </Typography>
      </div>
      <ProductCard myData={myData} />
    </>
  );

  //   </Box>;
}
