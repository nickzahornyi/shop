import express from 'express';

import { login } from './index';

export const router = express.Router();

router.post('/login', login);

export { router as auth };
