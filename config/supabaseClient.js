import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  "https://swwlmwvvmzdemlniwfkl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3d2xtd3Z2bXpkZW1sbml3ZmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyOTgxMDUsImV4cCI6MTk3OTg3NDEwNX0.heOrWNfUnk8Lx_Mwm2kq7QV9rMk4fAVminIgMIHbZ24"
);
