import { SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY


class CustomSupabaseClient extends SupabaseClient {
  setToken(newToken: string) {
    this.rest.headers['Authorization'] = `Bearer ${newToken}`
  }
}

export const supabase = new CustomSupabaseClient(supabaseUrl, supabaseAnonKey)