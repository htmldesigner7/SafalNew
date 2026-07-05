const mysql = require('mysql2/promise');

async function testInsert() {
  try {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'safal_db',
    });

    const query = `
      INSERT INTO contacts (full_name, service, phone, email, message)
      VALUES (?, ?, ?, ?, ?)
    `;
    
    await connection.execute(query, ['Test', 'Test Service', '1234567890', 'test@test.com', 'Test Message']);
    await connection.end();
    console.log('Successfully inserted data!');
  } catch (err) {
    console.error('MySQL Error Details:', err);
  }
}

testInsert();
