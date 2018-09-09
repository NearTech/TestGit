const Test = require('../Models/test');
const testCtrl = {};

//Creates an Exam
testCtrl.createTest = async (req, res) => {
    const test = await new Test({
        name: req.body.name,
        condition: req.body.condition,
        age: req.body.age
    });
    await test.save();
    res.json({
        'status': 'Test Saved'
    });
};
//Gets all exams
testCtrl.getAllTests = async (req, res) => {
    const tests = await Test.find();
    res.json(tests);
};

//Gets one exam
testCtrl.getTest = async (req, res) => {
    const test = await Test.findById(req.params.id);
    res.json(test);
};
//Edits one exam
testCtrl.editTest = async (req, res) => {
    const test = {
        name: req.body.name,
        condition: req.body.condition,
        age: req.body.age
    };
    await Test.findByIdAndUpdate(req.params.id, {$set: test}, {new: true});
    res.json({
        status: 'Exam Updated'
    });
};

//Deletes one exam
testCtrl.deleteTest = async (req, res) => {
    await Test.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Exam Deleted'
    });
};
module.exports = testCtrl;