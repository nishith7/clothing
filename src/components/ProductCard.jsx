import * as React from "react";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCardDialog from "./ProductCardDialog";

// const cardStyle = {
//   marginTop: 50,
// };

const ProductCard = ({ myData }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleClick = () => {
    navigate("/allproducts",{state:myData});
  };
  const toggleDialog = (item) => {
      setSelectedItem(item);
    setOpen(true);
  };

  return (
    <>
      {/* <Button sx={{display:"flex", justifyContent:'flex-end'}} onClick={handleClick}>View All</Button> */}
      <Grid container justifyContent="flex-end">
    <Grid  marginRight={20} item>
      <Button style={{textDecoration:'underline',textDecorationColor:"black",color:"black",fontWeight:"bold"}} variant="text" onClick={handleClick}>View All</Button>
    </Grid>
    </Grid>
      <div>
        <Grid container spacing={6} justifyContent={"center"}>
          {myData.slice(0,4).map((item) => (
            <Grid item key={item.id}>
              <Button onClick={() => toggleDialog(item)}>
                <Card
                  sx={{
                    width: 340,
                    height: 400,
                    borderRadius: 2,
                    marginTop: 2,
                  }}
                >
                  <Paper>
                    <img
                      src={item.imgSrc}
                      alt="Current Image"
                      style={{
                        maxWidth: "75%",
                        maxHeight: "90%",
                        aspectRatio: 1,
                      }}
                    ></img>
                  </Paper>

                  <CardContent
                    sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
                  >
                    <div>
                      <Typography
                        variant="overline"
                        fontWeight={500}
                        color={"darkslategray"}
                        // fontFamily={"Helvetica Now Text Medium, Helvetica, Arial, sans-serif"}
                        textTransform={"none"}
                        textAlign={"left"}
                        marginTop={2}
                      >
                        {item.type}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight={550}
                        color={"black"}
                        textTransform={"none"}
                        textOverflow={"clip"}
                        textAlign={"left"}
                      >
                        {item.name}
                      </Typography>
                     
                      <Typography
                        paddingTop={1}
                        textAlign={"left"}
                        color={"black"}
                        textTransform={"none"}
                      >
                        Rs.{item.price}.00
                      </Typography>
                      <Typography color={"white"} level="body-xs">
                        {item.description}
                      </Typography>
                      
                    </div>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
      
      {open && selectedItem && (
        <ProductCardDialog
          open={open}
          myData={selectedItem}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default ProductCard;

{
  /* <AspectRatio objectFit="contain">
                <Image alt="Mountains" src={item.imgSrc} layout="fill" placeholder="blur" /> */
}
{
  /* <img
    src={item.imgSrc}
    srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
    alt="A beautiful landscape."
  /> */
}
{
  /* </AspectRatio> */
}
{
  /* <CardMedia
                  sx={{  height: 0,
                    paddingTop: "100%",objectFit:"cover"  }}
               
                  // image={item.imgSrc}
                  title="green iguana"
                  
                /> */
}
{
  /* <Card
    sx={{
      width: 280,
      borderRadius: 2,
      marginTop: 2,
      boxShadow: 24,
    }}
  >
    <CardMedia
      sx={{
        width: '100%',
        height: 300,
        display: 'flex',
        '& img': {
          objectFit: 'cover',
          objectPosition: 'center top', // You can adjust this value as needed
          width: 20,
          height: 100,
        },
      }}
      image={item.imgSrc}
      title="green iguana"
    /> */
}

// import { AspectRatio, Image } from "@mui/icons-material";

// const cardStyle = {
//   marginTop: 200,
// };

// export default function ProductCard({ myData }) {
//   console.log(myData.map((item) => item.imgSrc));
//     myData.map((item) => (
//       return (
//         <div style={cardStyle}>
//         <Grid container spacing={2} justifyContent={"center"}>
//           <Grid item>
//             <Card
//               sx={{ width: 180, borderRadius: 3, marginTop: 2 }}
//               key={item.id}
//             >
//               <CardMedia
//                 sx={{ height: 200 }}
//                 {...console.log(item.imgSrc)}
//                 image={item.imgSrc}
//                 title="green iguana"
//               />

//               <CardContent
//                 orientation="horizontal"
//                 sx={{ backgroundColor: "rgba(246,169,17,255)" }}
//               >
//                 <div>
//                   <Typography color={"ivory"} level="title-lg">
//                     {item.name}
//                   </Typography>

//                   <Typography color={"ivory"} level="body-xs">
//                     Total price:
//                   </Typography>
//                   <Typography color={"ivory"} fontSize="lg" fontWeight="lg">
//                     {item.price}
//                   </Typography>
//                   <Typography color={"ivory"} level="body-xs">
//                     {item.description}
//                   </Typography>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         </div>
//       );
//       ))

// }

{
  /* <Button
            variant="solid"
            size="small"
            sx={{
              alignSelf: "center",
              fontWeight: 600,
              color: "ivory",
            }}
          >
            Explore
          </Button> */
}
// import React from "react";
// import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
