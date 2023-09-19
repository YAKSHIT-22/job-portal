import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function ForgotPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="bg-[#f5f6fa] w-full h-full min-h-[100vh] flex flex-col justify-center items-center">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={1}
        marginBottom={4}
      >
        <Typography variant="h5" color={"#5c6575"}>
          Welcome to the
        </Typography>
        <Typography variant="h5" fontWeight="bold" color={"#5c6575"}>
          Candidate Portal
        </Typography>
      </Box>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="xs"
          className="bg-white rounded-[20px] shadow-lg pt-10"
        >
          <CssBaseline />
          <LockOutlinedIcon />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
              className="w-full"
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined" // Added this line
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "100%" }} // Added width: '100%'
              >
                Submit
              </Button>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}

          <Box
            marginTop={5}
            textAlign="center"
            borderTop="1px dotted"
            borderColor="grey.500"
            p={2}
          >
            <Typography variant="body1">
              <span style={{ color: "blue" }}>Back To Sign In</span>
            </Typography>
          </Box>
        </Container>
      </ThemeProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        marginTop={3}
      >
        <Typography variant="h5" color={"#5c6575"}>
          Powered By VB
        </Typography>
      </Box>
    </div>
  );
}
