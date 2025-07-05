import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


class CustomSupabaseClient extends SupabaseClient {
  setToken(newToken: string) {
    this.rest.headers['Authorization'] = `Bearer ${newToken}`
  }
}

let supabase = createClient(supabaseUrl, supabaseAnonKey)

function recreateSupabase(token: string) {
  supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  })
}

export { supabase, recreateSupabase }

