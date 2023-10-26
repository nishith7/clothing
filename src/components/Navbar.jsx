import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Stack,
  InputAdornment,
  TextField,
  CardMedia,
  Grid,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as CustomSearchIcon } from "../../src/assets/SearchIcon.svg";
// // import { Image } from "@mui/icons-material";
// // import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: "rgba(20, 33, 61, 1)",
          "@media (max-width: 1536px)": {
            width:"auto"
          },
          height: 80,
        }}
        position="static"
      >
        <Toolbar sx={{ display:"flex",alignItems:"center", flexDirection: "row" }}>
          <Stack
            direction="row"
            spacing={2}
            
          >
            <Button  sx={{color:"white",textTransform:"none", paddingTop:2}}>
            <CardMedia sx={{height: 40, width: 40,marginRight:2}} image="/assets/enshield.png"/>

            <Typography
              variant="h4"
              paddingRight={2}
              // marginRight={2} 
              fontWeight={550}
              fontFamily={"Intervogue Thin"}
            >
              ENSHIELD
              
            </Typography>

            </Button>
          
            <Button
              sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }}
              color="inherit"
            >
              Home
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }}
              color="inherit"
            >
              Shop
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }}
              color="inherit"
            >
              Men
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }}
              color="inherit"
            >
              Women
            </Button>
            <Button
              sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }}
              color="inherit"
            >
              Accesories
            </Button>
          </Stack>
          <TextField
            size="medium"
            placeholder="Search Products"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <CustomSearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: "10px",
                marginTop: 2,
                width: { xs: "100%", sm: 400 },
                height: 50,
                marginLeft: { xs: 0, sm: 20 },
                backgroundColor: "white",
              },
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}




// export default function NavBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         sx={{
//           backgroundColor: "rgba(246, 169, 17, 255)",
//           height: 80,
//         }}
//         position="static"
//       >
//         <Toolbar sx={{ flexDirection: "row" }}>
//           <Typography
//             variant="h4"
//             paddingLeft={2}
//             paddingTop={2}
//             fontWeight={550}
//             sx={{ flexGrow: 1, textAlign: "left" }}
//             fontFamily={"Intervogue Thin"}
//           >
//             Clothing Store
//           </Typography>

//           {/* Navigation buttons for larger screens */}
//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{
//               display: { xs: "none", sm: "flex" },
//               marginRight: 2,
//             }}
//           >
//             <Button sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }} color="inherit">
//               Home
//             </Button>
//             <Button sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }} color="inherit">
//               Shop
//             </Button>
//             <Button sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }} color="inherit">
//               Men
//             </Button>
//             <Button sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }} color="inherit">
//               Women
//             </Button>
//             <Button sx={{ textTransform: "none", fontSize: 18, paddingTop: 3 }} color="inherit">
//               Accessories
//             </Button>
//           </Stack>

//           {/* Search bar for all screens */}
//           <TextField
//             size="medium"
//             placeholder="Search Products"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <IconButton>
//                     <CustomSearchIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//               sx: {
//                 borderRadius: "10px",
//                 marginTop: 2,
//                 width: { xs: "100%", sm: 400 },
//                 height: 50,
//                 marginLeft: { xs: 0, sm: 2 }, // Adjust the margin for small screens
//                 backgroundColor: "white",
//               },
//             }}
//           />

//           {/* Hamburger menu icon for smaller screens */}
//             {/* <MenuIcon /> */}
//           {/* </IconButton> */}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
