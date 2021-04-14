import User from './users.model.js';
import { OK, UserNotFound, Error } from './users.helper.js';

const getUsers = (req, res) => {
  User.find(req.query)
    .exec()
    .then((users) => OK(res, 200, users))
    .catch((error) => Error(res, 500, error));
};

const getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .exec()
    .then((user) => (user ? OK(res, 200, user) : UserNotFound(res, { id })))
    .catch((error) => Error(res, 400, error));
};

const getUserByUsername = (req, res) => {
  const username = req.params.username;
  User.findOne({ username })
    .exec()
    .then((user) =>
      user ? OK(res, 200, user) : UserNotFound(res, { username })
    )
    .catch((error) => Error(res, 400, error));
};

const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) => OK(res, 201, user))
    .catch((error) => Error(res, 400, error));
};

const updateUserById = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .exec()
    .then((user) =>
      user ? OK(res, 200, user) : UserNotFound(res, { username })
    )
    .catch((error) => Error(res, 400, error));
};

const deleteUserById = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .exec()
    .then((user) =>
      user ? OK(res, 200, user) : UserNotFound(res, { username })
    )
    .catch((error) => Error(res, 400, error));
};

export default {
  getUsers,
  getUserById,
  getUserByUsername,
  createUser,
  updateUserById,
  deleteUserById,
};
