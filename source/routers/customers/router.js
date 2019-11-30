import express from 'express';

import { get, post } from './index';
import { getByHash, updateByHash, deleteByHash } from './hash';

export const router = express.Router();

router.get('/', get);
router.post('/', post);

router.get('/:hash', getByHash);
router.put('/:hash', updateByHash);
router.delete('/:hash', deleteByHash);

export { router as customers };
