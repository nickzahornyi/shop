import express from 'express';

import { get, post } from './route';
import { getByHash, updateByHash, removeByHash } from './hash/route';
import { limiter, validator, authenticate } from '../../helpers';

import { product } from '../../schemas';

export const router = express.Router();

router.get('/', [authenticate, limiter(5, 60 * 1000)], get);
router.post('/', [validator(product)], post);

router.get('/:hash', [authenticate], getByHash);
router.put('/:hash', [authenticate, validator(product)], updateByHash);
router.delete('/:hash', [authenticate], removeByHash);

export { router as products };
