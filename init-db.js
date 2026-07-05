const mysql = require('mysql2/promise');

async function initializeDB() {
  try {
    console.log('Connecting to MySQL...');
    // Connect without database first to create it
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '' // default for XAMPP
    });

    console.log('Creating database if not exists...');
    await connection.query('CREATE DATABASE IF NOT EXISTS safal_db');
    
    console.log('Using safal_db...');
    await connection.query('USE safal_db');

    console.log('Creating contacts table...');
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contacts (
          id INT AUTO_INCREMENT PRIMARY KEY,
          full_name VARCHAR(255) NOT NULL,
          service VARCHAR(255),
          phone VARCHAR(50),
          email VARCHAR(255) NOT NULL,
          message TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await connection.query(createTableQuery);

    console.log('Database and Table created successfully!');
    await connection.end();
  } catch (error) {
    console.error('Error setting up database:', error.message);
    console.log('\nPlease make sure your XAMPP or MySQL server is running!');
  }
}

initializeDB();
