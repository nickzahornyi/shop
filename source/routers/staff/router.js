import express from 'express';

import { get, post } from './index';
import { authenticateStaff } from '../../helpers';

export const router = express.Router();

router.get('/', [authenticateStaff], get);
router.post('/', post);

export { router as staff };
