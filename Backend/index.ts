import cors from "cors";
import express, { json } from "express";
import fileUpload from 'express-fileupload';
import path from "path";
import * as dotenv from 'dotenv'
dotenv.config();

import { authRouter } from "./6-controllers/auth-controller";
import { vacationsController } from "./6-controllers/vacations-controller";
import { followersController } from "./6-controllers/likes-controller";

const server = express();

server.use(express.static(path.join(__dirname,'public')));
server.use('/static',express.static('public'));

server.use(cors());
server.use(json());
server.use(fileUpload())
// server.use(express.static('build'));

server.use("/api/follow", followersController);
server.use("/api/vacations", vacationsController );
server.use('/api', authRouter);


server.listen(3001, ()=> {
    console.log('Listening on port 3001....');
    
})

