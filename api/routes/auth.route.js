import express from 'express'
import { signin, signup, google } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', (req, res) => {
  console.log('Request body:', req.body);
  res.status(200).json({ message: 'Received data successfully', data: req.body });
});

export default router