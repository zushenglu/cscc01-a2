import { Router } from "express";
import LfgPost from "../models/LfgPost.js";

const router = Router();

//@route   GET api/lfgpost
//@desc    [DESCRIPTION OF WHAT ROUTE DOES]
//@access  [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
router.get("/", (req, res) => {});

//@route   GET api/lfgpost/:id
//@desc    [DESCRIPTION OF WHAT ROUTE DOES]
//@access  [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
router.get("/:id", (req, res) => {});

//@route  POST api/lfgpost
//@desc   [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
router.post("/", (req, res) => {});

//@route PUT api/lfgpost/:id
//@desc  [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
router.put("/:id", (req, res) => {});

//@route DELETE api/lfgpost/:id
//@desc  [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
router.delete("/:id", (req, res) => {});

export default router;
