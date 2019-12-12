import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator, authenticateCustomer, authenticateStaff } from '../../helpers';

import { user } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticateStaff, limiter(5, 60 * 1000)], get);
router.post('/', [validator(user)], post);

router.get('/:hash', [authenticateCustomer], getByHash);
router.put('/:hash', [authenticateCustomer, validator(user)], updateByHash);
router.delete('/:hash', [authenticateCustomer], deleteByHash);

export { router as customers };
