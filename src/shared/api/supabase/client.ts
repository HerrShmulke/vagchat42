import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = createClient(supabaseUrl, supabaseAnonKey)

function recreateSupabase(token: string) {  
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storageKey: 'recreate-supabase',
    },
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  })
}

export { supabase, recreateSupabase }

