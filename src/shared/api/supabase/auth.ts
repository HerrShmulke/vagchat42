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

  const response = await supabase.functions.invoke('telegram-auth', {
    body: { initData },
  })

  await supabase.auth.setSession({
    access_token: response.data.access_token,
    refresh_token: '',
  })
}