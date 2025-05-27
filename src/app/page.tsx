"use client";
import { useEffect } from "react";
import Hero from "./components/main/Hero";
import Projects from "./components/main/Projects";
import Skills from "./components/main/Skills";
import Encryption from "./components/main/Encryption";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
    script.onload = () => {
      // Initialize the chatbot after the script is loaded
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).Chatbot.init({
        chatflowid: "190a09b7-bde3-45c7-8f5e-031bece49fe1",
        apiHost: "http://localhost:3000",
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script if needed
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}