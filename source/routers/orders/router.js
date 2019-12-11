import express from 'express';

import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash/route';
import { limiter, validator, authenticate } from '../../helpers';

import { order } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticate, limiter(5, 60 * 1000)], get);
router.post('/', [validator(order)], post);

router.get('/:hash', [authenticate], getByHash);
router.put('/:hash', [authenticate, validator(order)], updateByHash);
router.delete('/:hash', [authenticate], removeByHash);

export { router as orders };
