import { ServerResponse } from "http";
import express, { Request, Response } from "express";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req: Request, res: Response ) => {
    res.send( "Hello world!" );
} );
app.get("/hellourl/:name", function(req: Request, res: Response) {
  let name: string = req.params.name
  res.send(`Hello ${name}`)
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
