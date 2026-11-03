
import inventory from '../model/inventoryData.js';

export const getAllItems = (req, res) => {
    let result = [...inventory];

    if (req.query.category) {
        result = result.filter(item =>
            item.category.toLowerCase() === req.query.category.toLowerCase()
        );
    }

    if (req.query.quantity !== undefined) {
        result = result.filter(item =>
            item.quantity === Number(req.query.quantity)
        );
    }

    if (req.query.minQuantity !== undefined) {
        result = result.filter(item =>
            item.quantity >= Number(req.query.minQuantity)
        );
    }

    if (req.query.maxQuantity !== undefined) {
        result = result.filter(item =>
            item.quantity <= Number(req.query.maxQuantity)
        );
    }

    if (req.query.search) {
        result = result.filter(item =>
            item.name.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }

    res.status(200).json({
        success: true,
        count: result.length,
        data: result
    });
};

export const getItemById = (req, res) => {
    const item = inventory.find(item => item.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({
            success: false,
            message: 'Item not found'
        });
    }

    res.status(200).json({
        success: true,
        data: item
    });
};

export const addItem = (req, res) => {
    const newItem = {
        id: inventory.length
            ? Math.max(...inventory.map(item => item.id)) + 1
            : 1,
        ...req.body
    };

    inventory.push(newItem);

    res.status(201).json({
        success: true,
        message: 'Item added successfully',
        data: newItem
    });
};

export const updateItem = (req, res) => {
    const item = inventory.find(item => item.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({
            success: false,
            message: 'Item not found'
        });
    }

    Object.assign(item, req.body);

    res.status(200).json({
        success: true,
        message: 'Item updated successfully',
        data: item
    });
};

// DELETE item
export const deleteItem = (req, res) => {
    const index = inventory.findIndex(item =>
        item.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Item not found'
        });
    }

    const deletedItem = inventory.splice(index, 1)[0];

    res.status(200).json({
        success: true,
        message: 'Item deleted successfully',
        data: deletedItem
    });
};
