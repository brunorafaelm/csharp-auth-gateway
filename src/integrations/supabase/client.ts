// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://lzhznyovsjulcxvjtpal.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6aHpueW92c2p1bGN4dmp0cGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NTE5ODksImV4cCI6MjA1MzEyNzk4OX0.20PRbqSkuRjsIhXXdVQZm5az95W21YqIWHFyk7813d4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);