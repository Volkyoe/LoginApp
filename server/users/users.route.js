import express from 'express';
import UserController from './users.controller.js';

const router = express.Router();

//? Getting ALL that matches
router.get('/', UserController.getUsers);

//? Getting ONE
router.get('/id/:id', UserController.getUserById);
router.get('/username/:username', UserController.getUserByUsername);

//* Creating ONE
router.post('/', UserController.createUser);

//* Updating ONE
router.patch('/:id', UserController.updateUserById);

//! Deleting ONE
router.delete('/:id', UserController.deleteUserById);

export default router;
