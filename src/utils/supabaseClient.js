import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bleqtejvbnxmbbtzdrcr.supabase.co'; // ใส่ URL จาก Supabase Dashboard
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsZXF0ZWp2Ym54bWJidHpkcmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4ODY5MDcsImV4cCI6MjA0ODQ2MjkwN30.z_Bixy2vopTHJoRE9wUzTYpQ8EoShu3bcE9sIzw1JJc'; // ใส่ Public API Key
export const supabase = createClient(supabaseUrl, supabaseKey);
