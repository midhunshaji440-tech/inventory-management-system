
export const validateItem = (req, res, next) => {

    const { name, category, quantity, price } = req.body;

    const errors = [];

    if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
        errors.push("Request body must be a valid JSON object");
    } else {

        if (req.method === 'POST') {
            if (name === undefined) errors.push("Name is required");
            if (category === undefined) errors.push("Category is required");
            if (quantity === undefined) errors.push("Quantity is required");
            if (price === undefined) errors.push("Price is required");
        }

        if (name !== undefined &&
            (typeof name !== 'string' || name.trim() === '')) {
            errors.push("Name must be a non-empty string");
        }

        if (category !== undefined &&
            (typeof category !== 'string' || category.trim() === '')) {
            errors.push("Category must be a non-empty string");
        }

        if (quantity !== undefined &&
            (typeof quantity !== 'number' ||
            !Number.isInteger(quantity) || quantity < 0)) {
            errors.push("Quantity must be a non-negative integer");
        }

        if (price !== undefined &&
            (typeof price !== 'number' ||
            !Number.isFinite(price) || price < 0)) {
            errors.push("Price must be a non-negative number");
        }

        if (req.method === 'PUT' &&
            name === undefined &&
            category === undefined &&
            quantity === undefined &&
            price === undefined) {
            errors.push("At least one field is required for updating");
        }
    }

    if (errors.length > 0) {
        const error = new Error("Validation failed");
        error.status = 400;
        error.errors = errors;

        return next(error);
    }

    next();
};
