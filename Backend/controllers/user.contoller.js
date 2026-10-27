const { UserModel } = require("../models/user.model");

const saveData = async(req, res) => {
    const { username, email, password, age, gender,
         address, phoneNumber } = req.body;

    try {
        const userData = new UserModel({username, email, password, age, gender, address, phoneNumber});
        
        await userData.save();

        res.send({ message: 'User data saved successfully', data: userData });
    }
    catch (error) {
        res.status(500).json({ message: 'Error saving user data', error: error.message });
    }
}

module.exports = { saveData };