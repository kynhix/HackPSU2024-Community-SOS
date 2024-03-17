"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutButton(props: { className?: string }) {
  const supabase = createClient();
  const router = useRouter();

  const handleSignout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  }

  return <button onClick={handleSignout} className={"text-lg text-neutral-900" + props.className}>Sign Out</button>;
}
