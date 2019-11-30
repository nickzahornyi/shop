import express from 'express';

import { get, post } from './index';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

export { router as staff };
