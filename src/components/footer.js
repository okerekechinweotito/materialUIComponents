import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const style = {
  footer: {
    textAlign: "center",
    marginTop: "5em",
    padding: "1.5em",
  },
};

function Footer() {
  return (
    <Container
      sx={style.footer}
      component="footer"
      maxWidth="xl"
      className="globalBackgroundColor"
    >
      <Typography
        component="h1"
        variant="h6"
        sx={{ fontSize: { xs: "1em", md: "1.2em" } }}
      >
        Designed and Built by{" "}
        <Link
          href="https://www.okereke.dev/"
          underline="none"
          color="secondary"
          target="_blank"
          rel="noreferrer"
        >
          Okereke Chinweotito
        </Link>{" "}
      </Typography>
    </Container>
  );
}

export default Footer;
