import { Close } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  IconButton,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
// import shoeData from "../data/shoeData";

const ProductCardDialog = ({ open, myData, setOpen }) => {
  console.log(myData);
  return (
    <Dialog
      sx={{
        maxWidth: "100%",
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Card 
    
      
        sx={{
          // maxWidth: "100%",
          //   width: "auto",
          height: 700,
          // width:700,
          borderRadius: 2,
          marginTop: 2,
          // display:"flex",
          // justifyContent:"center"
          // justifyItems:"center"
        }}
      >
        <Paper >
          <img
          
            src={myData?.imgSrc}
            alt="Current Image"
            style={{
              maxWidth: "95%",
              maxHeight: "75%",
              // justifyContent:"center"
              //   height:"auto",
              //   width:"auto",
              // aspectRatio: 1,
            }}
          ></img>
        </Paper>

        <CardContent sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
          <div>
            <Typography
              variant="overline"
              fontWeight={500}
              color={"darkslategray"}
              textTransform={"none"}
              textAlign={"left"}
              marginTop={2}
            >
              {myData?.type}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={550}
              color={"black"}
              textTransform={"none"}
              textOverflow={"clip"}
              textAlign={"left"}
            >
              {myData?.name}
            </Typography>

            <Typography
              paddingTop={1}
            //   fontWeight={"600"}
            //   fontSize={"15px"}
              textAlign={"left"}
            //   color={"rgb(37, 37, 37)"}
            //   fontFamily={"lato-regular"}
              textTransform={"none"}
            >
              Rs.{myData?.price}.00
            </Typography>
            <Typography  paddingTop={1}
              textAlign={"left"}
              color={"black"}
              textTransform={"none"}>
                {/* <ListItem color="black"> */}
                <ul>
                  <li>
                  {myData.description}

                  </li>
                </ul>
                {/* </ListItem> */}
            </Typography>
          </div>
        </CardContent>
      </Card>

      <DialogActions>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close"
        >
          <Close />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default ProductCardDialog;
