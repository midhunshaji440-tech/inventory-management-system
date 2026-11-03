import express from 'express';
import { validateItem } from '../middleware/validation.js';

import {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
} from '../controllers/inventoryController.js';

const router = express.Router();

router.get('/', getAllItems);

router.get('/:id', getItemById);

router.post('/', validateItem, addItem);

router.put('/:id', validateItem, updateItem);

router.delete('/:id', deleteItem);

export default router;
