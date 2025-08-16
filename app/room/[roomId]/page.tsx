"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

const Room = () => {
  const {roomId} = useParams();
  const containerRef = useRef<HTMLDivElement>(null);
  // const roomId = params.roomId as string;
function generateUserId() {
  // Generates a user ID like user_12345678 (max 32 chars, only letters, numbers, _)
  return "user_" + Math.random().toString(36).substring(2, 10);
}
  const myMeeting = async (element: HTMLDivElement) => {
    // Dynamically import the library on the client
      const { ZegoUIKitPrebuilt } = await import("@zegocloud/zego-uikit-prebuilt");
    const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET as string;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId?.toString() || "",
      generateUserId(),
      "Bipin"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall
      },
    });
  };

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    myMeeting(containerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return <div style={{ width: "100vw", height: "100vh" }} ref={containerRef} />;
};

export default Room;
