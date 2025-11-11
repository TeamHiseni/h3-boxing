import postgres from 'postgres';

// Direct database connection configuration
const DATABASE_URL = 'postgresql://postgres:h3boxing@db.mpuoddxouiriuxvttjdl.supabase.co:5432/postgres';

let sql;

try {
  sql = postgres(DATABASE_URL, {
    host: 'db.mpuoddxouiriuxvttjdl.supabase.co',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'h3boxing',
    ssl: 'require'
  });
} catch (error) {
  console.error('Database connection failed:', error);
}

// Function to save contact form data to database
export async function saveContactMessage(data) {
  try {
    if (!sql) {
      throw new Error('Database connection not available');
    }

    const result = await sql`
      INSERT INTO contact_messages (
        first_name, 
        last_name, 
        email, 
        subject, 
        message, 
        created_at
      ) VALUES (
        ${data.firstName},
        ${data.lastName}, 
        ${data.email},
        ${data.subject},
        ${data.message},
        NOW()
      )
      RETURNING id
    `;

    return { success: true, id: result[0].id };
  } catch (error) {
    console.error('Error saving contact message:', error);
    return { success: false, error: error.message };
  }
}

// Function to test database connection
export async function testConnection() {
  try {
    if (!sql) {
      return { success: false, error: 'Database connection not initialized' };
    }

    const result = await sql`SELECT 1 as test`;
    return { success: true, message: 'Database connection successful' };
  } catch (error) {
    console.error('Database connection test failed:', error);
    return { success: false, error: error.message };
  }
}

export default sql;