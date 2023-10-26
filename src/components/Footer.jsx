import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

const footerStyle = {
  // position: "absolute",
  bottom: 0,
  width: "auto",
};

export default function Footer() {
  return (
    <Box
      // position={"relative"}
      component="footer"
      sx={{
        backgroundColor: "rgba(20, 33, 61, 1)",
        // (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.grey[200]
        //     : theme.palette.grey[800],
        p: 3,
        ...footerStyle,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={24}
              fontWeight={800}
              variant="h6"
              color="white"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={500}
              variant="body2"
              color="white"
            >
ENSHIELD specializes in high-quality uniforms for businesses and institutions. Our experienced team and advanced technology ensure successful projects in various environments. We are committed to quality, style, and professionalism.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={24}
              fontWeight={800}
              variant="h6"
              color="white"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              fontSize={18}
              fontWeight={500}
              variant="body2"
              color="white"
            >
            4, Lunzua Road, Off Addis Ababa Drive, Rhodspark, Lusaka, Zambia
            </Typography>
            <br></br>
            <Typography fontSize={18}
              fontWeight={500} variant="body2" color="white">
              Email: info@tauruslifestyle.com
            </Typography>
            <Typography fontSize={18}
              fontWeight={500} variant="body2" color="white">
              {/* Phone: +91 9638383663 */}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={24}
              fontWeight={800}
              variant="h6"
              color="white"
              gutterBottom
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="rgb(255,255,255)">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="rgb(255,255,255)"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="rgb(255,255,255)">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography
            fontSize={20}
            fontWeight={700}
            variant="body2"
            color="rgb(255,255,255)"
            align="center"
          >
            {"Copyright © "}
            <Link color="rgb(255,255,255)" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
