"use client";

import { LiveblocksProvider } from "@liveblocks/react";
import { PropsWithChildren } from "react";


export function Providers({ children }: PropsWithChildren) {
    return (
        <LiveblocksProvider
            authEndpoint="/api/liveblocks-auth"
            resolveUsers={async ({ userIds }) => {
                const searchParams = new URLSearchParams(
                    userIds.map((userId) => ["userIds", userId])
                );
                const response = await fetch(`/api/users?${searchParams}`);
                if (response.ok) {
                    const users = await response.json();
                    return users;
                }
                else {
                    console.error("Failed to fetch user info", response.statusText);
                }
            }}
        >
            {children}
        </LiveblocksProvider>
    );
}
