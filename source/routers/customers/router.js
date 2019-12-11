import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';
import { limiter, validator, authenticate } from '../../helpers';

import { user } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticate, limiter(5, 60 * 1000)], get);
router.post('/', [validator(user)], post);

router.get('/:hash', [authenticate], getByHash);
router.put('/:hash', [authenticate, validator(user)], updateByHash);
router.delete('/:hash', [authenticate], deleteByHash);

export { router as customers };
