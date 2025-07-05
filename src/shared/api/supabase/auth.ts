import axios from "axios";
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
    body: JSON.stringify({
      initData
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(response => response.data)

  await supabase.auth.setSession({
    access_token: telegramAuthResponse.access_token,
    refresh_token: '',
  })
}