import express from "express";
import { followAsync, getLikesCount, isUserLikes, unFollowAsync } from "../5-logic/likes-logic";
import { FollowerModel } from "../4-models/FollowerModel";

export const followersController = express.Router();

//how much users follow one trip
followersController.get("/:id([0-9]+)", async (req, res) => {
    try {
        const id = +req.params.id
        const followersCount = await getLikesCount(id);
        res.json(followersCount);
    }
    catch (err) {
        // response.status(500).send(errorsHelper.getError(err));
        res.status(500).send(err)
    }
})

//does the current user follows a specific trip
followersController.get("/isuserlikes", async (req, res) => {
    try {
        console.log(req.body);
        
        const follower = <FollowerModel>req.body;
        const isFollow = await isUserLikes(follower);
        res.json(isFollow);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

//like button
followersController.post("/", async (req, res) => {
    try {
        const follower = <FollowerModel>req.body;
        const follow = await followAsync(follower);
        console.log(follow);
        
        res.json(follow);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

// dislike 
followersController.delete("/unfollow", async (req, res) => {
    try {
       
        
        const follower = <FollowerModel>req.body;
        const unFollow = await unFollowAsync(follower);
        console.log(unFollow);
        
        res.json(unFollow);
    }
    catch (err) {
        res.status(500).send(err);
    }
})