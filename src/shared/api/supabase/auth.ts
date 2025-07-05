import { supabase, recreateSupabase } from "./client";

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

  recreateSupabase(telegramAuthResponse.access_token)
}