import { supabase } from "./client";

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        initData: string;
      };
    };
  }
}

export async function initAuth() {
  const initData = window.Telegram?.WebApp.initData
  console.log(initData)
  if (!initData) return

  const telegramAuthResponse = await supabase.functions.invoke('telegram-auth', {
    body: {
      initData
    },
    method: 'POST',
  }).then(response => response.data)

  localStorage.setItem('sb-access-token', telegramAuthResponse.access_token)
  localStorage.setItem('sb-refresh-token', '')

  const { data, error } = await supabase.auth.refreshSession()

  console.log(data, error)

  if (error) {
    console.error('Failed to set session:', error)
    return
  }

 

}