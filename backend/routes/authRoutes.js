import express from 'express';
import { body, validationResult } from 'express-validator';
import { loginAdmin, createInitialAdmin } from '../controllers/authController.js';

const router = express.Router();

const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/login', [
  body('email').notEmpty().withMessage('Username/Email is required').trim(),
  body('password').notEmpty().withMessage('Password is required')
], validateFields, loginAdmin);

// TODO: Remove or secure setup route after initial admin creation
router.post('/setup', [
  body('email').notEmpty().withMessage('Username/Email is required').trim(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
], validateFields, createInitialAdmin);

export default router;
