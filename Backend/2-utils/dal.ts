import mysql, { RowDataPacket } from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'vacationdatabase'
});

export function execute<T>(query: string, params?: any[]) {
    return pool.execute<T & RowDataPacket[]>(query, params);
}

