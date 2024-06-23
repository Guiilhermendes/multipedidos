// src/models/weightModel.js
const db = require('../database');

class Weight {
    static async getAll(page = 1, pageSize = 20) {
        const offset = (page - 1) * pageSize;
        const [rows] = await db.query(`
            SELECT weights.id, weights.weight, weights.timestamp, suppliers.name AS supplier
            FROM weights
            JOIN suppliers ON weights.supplier_id = suppliers.id
            ORDER BY weights.timestamp DESC
            LIMIT ? OFFSET ?
        `, [pageSize, offset]);
        return rows;
    }

    static async getCount() {
        const [rows] = await db.query('SELECT COUNT(*) AS count FROM weights');
        return rows[0].count;
    }

    static async getLatest() {
        const [rows] = await db.query(`
            SELECT weights.id, weights.weight, weights.timestamp, suppliers.name AS supplier
            FROM weights
            JOIN suppliers ON weights.supplier_id = suppliers.id
            ORDER BY weights.timestamp DESC
            LIMIT 1
        `);
        return rows[0];
    }
}

module.exports = Weight;
