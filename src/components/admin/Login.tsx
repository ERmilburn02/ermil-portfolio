"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Database } from "@/types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

    router.refresh();
  };

  const handleReset = async () => {
    const origin = location.origin;

    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?next=/admin/settings`,
    });

    router.refresh();
  };

  return (
    <>
      <div className="flex flex-col">
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="text-black border"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="text-black border"
          placeholder="Password"
        />
        <div className="flex flex-row justify-evenly mt-2">
          <button onClick={handleSignIn} className="border">
            Sign in
          </button>
          <button onClick={handleReset} className="border">
            Reset Password
          </button>
        </div>
      </div>
    </>
  );
}
