const mongoose = require('mongoose');

const LitSchema = new mongoose.Schema({
    name: {
        type: String,  //this is the validation for a name for the db
        required: [ true, "You must input a name"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The name must be at least 2 characters long"],
    },
    type: {
        type: String, 
        required: [ true, "You must input a type"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The type"],
    },
    description: {
        type: String, 
        required: [ true, "You must input a description"],  //true - this is a required field, the 2nd part is the requirement
        minlength: [3, "The description"],
    },
    favorite: {
        type: Boolean,
        default: true,
    },
    skills: {
        type: Number,
        required: [ true, "Please indicate the number of skills, zero up to three"],
        min: [ 0, "Please indicate the number of skills, zero up to three"],
        max: [ 3, "Maximum number of skills is 3"],
    },
},
    { timestamps: true }); // need it! this is the options of the Schema, required
    module.exports = mongoose.model("Lit", LitSchema);