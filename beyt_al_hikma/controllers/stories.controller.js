const { stories, default: storiesModels } = require("../models/stories.models");
const Stories = require("../models/stories.models")
const ValidateEvent = require('../validation/stories.validation')
const AddStory = async (req, res) => {
    const { errors, isValid } = ValidateEvent(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            await Stories.findOne({ email: req.body.email }).then(async (exist) => {
                if (exist) {
                    errors.email = "Story Exist";
                    res.status(404).json(errors);
                } else {
                    await Stories.create(req.body)
                    res.status(201).json({ message: "Story added with success" })
                }

            }
            );
        }


    } catch (error) {
        console.log(error.message);
    }
}
const FindAllStories = async (req, res) => {
    try {
        const data = await Stories.find();
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const FindSinglStory = async (req, res) => {
    try {
        const data = await Stories.findOne({ _id: req.params.id });
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}
const UpdateStory = async (req, res) => {
    const { errors, isValid } = ValidateEvent(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            const data = await Stories.findOneAndUpdate({ _id: req.params.id },
                req.body,
                { new: true });
            res.status(201).json(data);
        }
    } catch (error) {
        console.log(error.message);
    }

}
const DeleteStory = async (req, res) => {
    try {
        await Stories.deleteOne({ _id: req.params.id });
        res.status(201).json({ message: "Story deleted with success" });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    AddStory,
    FindAllStories,
    FindSinglStory,
    UpdateStory,
    DeleteStory
}