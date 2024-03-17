"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginButton() {
  const supabase = createClient();

  const handleLogin = async () => {
    console.log(location.origin);
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/confirm`,
      },
    });
  };

  return <button onClick={handleLogin}><img src="/web_light_sq_SI@1x.png" /></button>;
}
