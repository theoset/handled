// supabase.js
const supabaseUrl = 'https://ccoylddolnrpywvjycur.supabase.co'; // Your actual Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjb3lsZGRvbG5ycHl3dmp5Y3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MTc0NDYsImV4cCI6MjA5NzM5MzQ0Nn0.ZYaOZKKue6H5Wxr68KH9UZhgalOaBEsS8Ju8i4BriRM';               // Your actual API key

// This creates the global database client accessible by your other scripts
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
