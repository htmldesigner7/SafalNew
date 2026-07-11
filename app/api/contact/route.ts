import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, service, phone, email, message } = data;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Name, Email and Message are required' }, { status: 400 });
    }

    // 1. Save to MySQL
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'safal_db',
      });

      const query = `
        INSERT INTO contacts (full_name, service, phone, email, message)
        VALUES (?, ?, ?, ?, ?)
      `;
      
      await connection.execute(query, [fullName, service || '', phone || '', email, message]);
      await connection.end();

      return NextResponse.json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully.'
      });

    } catch (err) {
      console.error('MySQL Error:', err);
      return NextResponse.json({ 
        error: 'Failed to save to database. Check server console logs.',
        dbError: err instanceof Error ? err.message : String(err)
      }, { status: 500 });
    }

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
