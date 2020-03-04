const Version = require('../models/version.model');

module.exports = {
    index: (req, res) => {
        Version.find()
            .then(results => res.json(results))
            .catch(err => res.status(400).json(err.errors));
    },
    create: (req, res) => {
        console.log(req.body)
        const newVersions = new Version(req.body);
        newVersions
            .save()
            .then( newVersions => beginComparingVersions(newVersions))
            .then(() => {
                res.json({ msg: "success!", newVersions: newVersions });
            })
            .catch(err => res.json(err));
    }
}

const beginComparingVersions = (newVersions) => {
    let compareVersions = newVersions.versionA.localeCompare(newVersions.versionB);
    if (compareVersions === -1) {
        newVersions.results = '"' + newVersions.versionA + '" comes before "' + newVersions.versionB + '"';
    }
    else if (compareVersions === 0) {
        newVersions.results = 'Both versions are the same';
    }
    else {
        newVersions.results = '"' + newVersions.versionA + '" comes after "' + newVersions.versionB + '"';
    }
    console.log(newVersions.versionA);
    return newVersions
}