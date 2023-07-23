"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthError } from "@supabase/supabase-js";

export default function ResetPasswordFormComponent() {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handlePasswordReset = async () => {
    const response = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (response.error) {
      console.error(response.error);
      setStatusMessage(`Error: ${response.error.message}`);
    } else {
      setStatusMessage("Password updated successfully");
      setNewPassword("");
      setNewPasswordConfirmation("");
    }

    router.refresh();
  };

  return (
    <>
      <div className="flex flex-col">
        <input
          name="password"
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          className="text-black border"
          placeholder="New Password"
        />
        <input
          name="passwordConfirm"
          type="password"
          onChange={(e) => setNewPasswordConfirmation(e.target.value)}
          value={newPasswordConfirmation}
          className="text-black border"
          placeholder="Confirm Password"
        />
        <button onClick={handlePasswordReset} className="border">
          Update password
        </button>
        {statusMessage != "" && <span>{statusMessage}</span>}
      </div>
    </>
  );
}
