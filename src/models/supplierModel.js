const db = require('../database');

class Supplier {
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM suppliers');
        return rows;
    }
}

module.exports = Supplier;
