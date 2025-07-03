import { supabase } from "./client";

export async function initAuth() {
  // @ts-ignore
  const initData = window.Telegram?.WebApp?.initData
  
  if (!initData) return

  const response = await supabase.functions.invoke('telegram-auth', {
    body: {
      initData,
    }
  })

  await supabase.auth.setSession({
    access_token: response.data.access_token,
    refresh_token: '',
  })
}