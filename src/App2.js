import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor: 'skyblue',
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "lightblue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
  }))
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        size="small"
        color="secondary"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        size="small"
        color="success"
      >
        Add new post
      </Button>

      <Button variant="outlined" disabled>
        Outlined
      </Button>

      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>

      <BlueButton> My Button</BlueButton>
      <BlueButton> Another Button</BlueButton>
    </div>
  );
}

export default App;
