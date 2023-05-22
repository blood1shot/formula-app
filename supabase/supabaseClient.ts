import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
export const supabase = createClient(config.PROJECT_URL, config.ANON_KEY);
