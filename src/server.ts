import app from "./app";

app.listen(3333, (err) =>
  err
    ? console.log("Error at start server")
    : console.log("Server listen at 3333")
);
