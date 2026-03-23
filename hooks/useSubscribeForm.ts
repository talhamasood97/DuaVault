"use client";

import { useState } from "react";
import {
  trackSubscribeAttempt,
  trackSubscribeSuccess,
  trackSubscribeError,
} from "@/lib/analytics";

export type SubscribeStatus = "idle" | "loading" | "success" | "error";

/**
 * Shared subscribe form logic consumed by both SubscribeForm and
 * HomeSubscribeBanner. Single source of truth for the API call,
 * state management, and analytics events.
 */
export function useSubscribeForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    trackSubscribeAttempt();
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase(), name: name.trim() }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "Please check your inbox to confirm.");
        trackSubscribeSuccess();
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        trackSubscribeError(data.error ?? "api_error");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
      trackSubscribeError("network_error");
    }
  }

  return { email, setEmail, name, setName, status, message, handleSubmit };
}
