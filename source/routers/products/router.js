import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator, authenticate, authenticateStaff } from '../../helpers';

import { product } from '../../schemas';

export const router = express.Router();

router.get('/', [limiter(5, 60 * 1000)], get);
router.post('/', [authenticateStaff, validator(product)], post);

router.get('/:hash', [authenticate], getByHash);
router.put('/:hash', [authenticateStaff, validator(product)], updateByHash);
router.delete('/:hash', [authenticateStaff], deleteByHash);

export { router as products };
