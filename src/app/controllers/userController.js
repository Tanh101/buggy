const exress = require('express');
const User = require('../models/User');
const userController = {
    getAllusers: async (req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json({
                success: true,
                message: 'Get all users successfully',
                users: users
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            return res.status(200).json({
                success: true,
                message: 'Get user successfully',
                user: user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    updateUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = User.updateUserById(id, req.body);
            return res.status(200).json({
                success: true,
                message: 'Update user successfully',
                user: user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    deleteUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = User.deleteUserById(id);
            return res.status(200).json({
                success: true,
                message: 'Delete user successfully',
                user: user
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
}

module.exports = userController;
