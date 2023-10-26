import { Button, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
// import shoeData from '../data/shoeData';
import { useLocation } from "react-router-dom";

export default function AllProductsPage(params) {

    const cardStyle = {
        marginTop: 50,
      };
      const location = useLocation();
      const data = location.state;
  return (

    <div style={cardStyle}>
    <Grid container spacing={6} justifyContent={"center"}>
      {data.map((item) => (
        <Grid item key={item.id}>
          <Button
        //    onClick={() => toggleDialog(item)}
           >
            <Card
              sx={{
                width: 320,
                height: 380,
                borderRadius: 2,
                marginTop: 2,
              }}
            >
              <Paper>
                <img
                  src={item.imgSrc}
                  alt="Current Image"
                  style={{
                    maxWidth: "70%",
                    maxHeight: "75%",
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
                  {/* <Typography color={"white"} level="body-xs">
                  Total price:
                </Typography> */}
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
                  {/* {
                    <ProductCardDialog
                      open={open}
                      myDataId={dataId}
                      setOpen={setOpen}
                    />
                  } */}
                </div>
              </CardContent>
            </Card>
          </Button>
        </Grid>
      ))}
    </Grid>
  </div>

  )
}
