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
        {/* <button onClick={handleSignUp}>Sign up</button> */}
        <button onClick={handleSignIn} className="border">
          Sign in
        </button>
      </div>
    </>
  );
}
