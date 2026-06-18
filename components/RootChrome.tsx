"use client";

import { usePathname } from "next/navigation";
import ScrollProgress from "@/components/ScrollProgress";
import ChatBot from "@/components/ChatBot";

// Keeps ideno LLC's own scroll bar / chat widget off the /jinzai-driver-hp
// client proposal preview, which has its own identity and isn't this site.
export default function RootChrome() {
  const pathname = usePathname();
  if (pathname?.startsWith("/jinzai-driver-hp")) return null;

  return (
    <>
      <ScrollProgress />
      <ChatBot />
    </>
  );
}
