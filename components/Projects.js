import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <div>
      <h1
        style={{
          fontSize: "3rem",
          textAlign: "center",
          margin: "6rem",
        }}
      >
        Projects & Experience
      </h1>

      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/prop.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            E-commerce Website
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/paubhaji.jpg"
          />
          <Typography gutterBottom variant="h5" component="div">
            Restaurant
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/weather.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Weather
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/todo.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            To-Do List
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/tictac.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Tic-Tac-Toe
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/incdcr.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Increment/Decrement
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/ecommerce.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Clock
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/calculator.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Calculator
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card
        sx={{
          maxWidth: 345,
          float: "left",
          margin: "3rem",
          background: "#000",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image="./Images/clock.png"
          />
          <Typography gutterBottom variant="h5" component="div">
            Clock
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" sx={{ color: "#f06292" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
