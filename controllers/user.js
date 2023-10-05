const User = require('../models/user');

const uuid = require('uuid').v4;

const MOCK_USERS = [
    {
        id: uuid(),
        name: 'Alejandro Vazquez',
        country: 'Mexico'
    }
]

const getAllUsers = (req, res) => {
    console.log('Listening to users');

    res.status(200).json({
        status: 'success',
        data: {
            users: MOCK_USERS
        }
    });
}

const getUserById = (req, res) => {

    const { id } = req.params;

    // Sample function, need to change to API call.
    const user = MOCK_USERS.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            status: 'failed',
            message: 'User not found, try with a correct id.'
        });
    }

    res.status(200).json({
        status: 'success',
        data: {
            user: user
        }
    });
}

const saveUser = async (req, res) => {
    const body = req.body;

    try {

        // Register on DB.
        const newUser = await User.create(body);

        res.status(201).json({
            status: 'sucess',
            data: {
                user: newUser
            }
        })
    } catch(e) {
        console.log(e);
    }

}

const deleteUser = (req, res) => {

    const { id } = req.params;

    // Sample function, need to change to API call.
    const userIndex = MOCK_USERS.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            status: 'failed',
            message: 'User not found, try with a correct id.'
        });
    }

    MOCK_USERS.splice(userIndex, 1);
    
    res.status(200).json({
        status: 'success',
        data: {
            users: MOCK_USERS
        }
    });
}

const updateUser = (req, res) => {

    const { id } = req.params;

    // Find user.
    const userIndex = MOCK_USERS.findIndex(user => user.id === id);

    // Validate user exists.
    if (userIndex === -1) {
        res.status(404).json({
            status: 'failed',
            message: 'User not found, try with a correct id.'
        })
    }

    // Update user
    MOCK_USERS[userIndex] = {
        ...MOCK_USERS[userIndex],
        ...req.body
    }

    // Send response.
    res.status(200).json({
        status: 'success',
        data: {
            user: MOCK_USERS[userIndex],
        }
    });

}

module.exports = {
    deleteUser,
    getAllUsers,
    getUserById,
    saveUser,
    updateUser,
}