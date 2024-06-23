// src/controllers/weightController.js
const Weight = require('../models/weightModel');

exports.getWeights = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;
    try {
        const weights = await Weight.getAll(page, pageSize);
        const total = await Weight.getCount();
        res.json({
            weights,
            total,
            page,
            pageSize,
            totalPages: Math.ceil(total / pageSize)
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weights' });
    }
};
