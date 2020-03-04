const mongoose = require('mongoose');

const VersionSchema = new mongoose.Schema({
    versionA:{
        type:String,
        required:[true,"A Version input is required"],
        validate: {
            validator: val => /^([0-9]+)\.([0-9]+)\.([0-9]+)/.test(val),
            message: "Please enter a valid Version"
        }
    },
    versionB:{
        type:String,
        required:[true,"A Version input is required"],
        validate: {
            validator: val => /^([0-9]+)\.([0-9]+)\.([0-9]+)/.test(val),
            message: "Please enter a valid Version"
        }
    },
    results:{
        type:String
    }
},{timestamps:true});


const Version = mongoose.model("Version", VersionSchema);

module.exports = Version;