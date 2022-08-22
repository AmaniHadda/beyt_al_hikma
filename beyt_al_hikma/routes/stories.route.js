const express= require('express');
const { AddStory, FindAllStories, FindSinglStory, UpdateStory, DeleteStory} = require('../controllers/stories.controller');
const router= express.Router()

/* add story */
router.post('/stories', AddStory)

/* find all stories */
router.get('/stories', FindAllStories)

/* find single story */
router.get('/stories/:id', FindSinglStory)

/* add story */
router.put('/stories/:id', UpdateStory)

/* add story */
router.delete('/stories/:id', DeleteStory)


module.exports= router;