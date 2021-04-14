import express from 'express';
import Subscriber from '../models/users.js';

const router = express.Router();

// Getting ALL
router.get('/', (req, res) => {
  Subscriber.find()
    .exec()
    .then((subscribers) => res.json(subscribers))
    .catch((err) =>
      res.status(500).json({
        message: err.message,
      })
    );
});

// Getting ONE
router.get('/:id', (req, res) => {
  Subscriber.findById(req.params.id)
    .exec()
    .then((subscriber) =>
      subscriber
        ? res.json(subscriber)
        : res.status(404).json({ message: 'Cannot find user.' })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
});

// Creating ONE
router.post('/', async (req, res) => {
  const newSubscriber = new Subscriber({ name: req.body.name });
  newSubscriber
    .save()
    .then((subscriber) => res.status(201).json(subscriber))
    .catch((err) => res.status(400).json({ message: err.message }));
});

// Updating ONE
router.patch('/:id', (req, res) => {
  Subscriber.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then((subscriber) =>
      subscriber
        ? res.json(subscriber)
        : res.status(404).json({ message: 'Cannot find user.' })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
});

// Deleting ONE
router.delete('/:id', (req, res) => {
  Subscriber.findByIdAndDelete(req.params.id)
    .exec()
    .then((subscriber) =>
      subscriber
        ? res.json(subscriber)
        : res.status(404).json({ message: 'Cannot find user.' })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
});

export default router;
