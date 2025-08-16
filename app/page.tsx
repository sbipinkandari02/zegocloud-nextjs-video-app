"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Home() {
  const roomId = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <input
          ref={roomId}
          id="roomId"
          type="text"
          placeholder="Enter Room ID"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1.5px solid #ccc",
            borderRadius: "8px",
            fontSize: "1.25rem",
          }}
        />
      </div>
      <button
        style={{
          padding: "0.75rem 2rem",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1.25rem",
          cursor: "pointer",
        }}
        onClick={() =>{router.push(`/room/${roomId.current?.value}`)}}
      >
        Join
      </button>
    </div>
  );
}
