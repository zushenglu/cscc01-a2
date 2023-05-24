import asyncHandler from "express-async-handler";

//@route  POST api/lfgpost
//@desc   [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
const createLFGPost = asyncHandler(async (req, res) => {
    
});

//@route   GET api/lfgpost
//@desc    [DESCRIPTION OF WHAT ROUTE DOES]
//@access  [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
const getLFGPosts = asyncHandler(async (req, res) => {

});

//@route   GET api/lfgpost/:id
//@desc    [DESCRIPTION OF WHAT ROUTE DOES]
//@access  [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
const getLFGPost = asyncHandler(async (req, res) => {

});

//@route PUT api/lfgpost/:id
//@desc  [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
const updateLFGPost = asyncHandler(async (req, res) => {
    
});

//@route DELETE api/lfgpost/:id
//@desc  [DESCRIPTION OF WHAT ROUTE DOES]
//@access [WHETHER PUBLIC OR PRIVATE i.e. LOGGED IN USER CAN ACCESS IT OR NOT]
const deleteLFGPost = asyncHandler(async (req, res) => {
    
});

export {
    createLFGPost,
    getLFGPosts,
    getLFGPost,
    updateLFGPost,
    deleteLFGPost
};