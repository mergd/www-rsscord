"use client";

import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Button, Code, Dialog, Flex, Text } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

interface GuideDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  redirectUrl: string;
  countdownSeconds?: number;
}

export const GuideDialog: React.FC<GuideDialogProps> = ({
  isOpen,
  onOpenChange,
  redirectUrl,
  countdownSeconds = 5, // Default countdown time
}) => {
  const [countdown, setCountdown] = useState(countdownSeconds);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    } else if (isOpen && countdown === 0) {
      window.location.href = redirectUrl;
      onOpenChange(false); // Close dialog on redirect attempt
    }

    // Cleanup interval
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isOpen, countdown, redirectUrl, onOpenChange]);

  // Reset countdown when dialog is reopened
  useEffect(() => {
    if (isOpen) {
      setCountdown(countdownSeconds);
    }
  }, [isOpen, countdownSeconds]);

  // Prevent closing via overlay click during countdown
  const handleInteractOutside = (event: Event) => {
    if (isOpen && countdown > 0 && countdown < countdownSeconds) {
      event.preventDefault();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Content
        style={{ maxWidth: 450 }}
        onInteractOutside={handleInteractOutside}
      >
        <Dialog.Title>Quick Guide</Dialog.Title>
        <Dialog.Description size="2" mb="4" className="text-gray-11 text-base">
          Here's a quick look at what Discorss can do:
        </Dialog.Description>

        <Flex direction="column" gap="2">
          <ul className="list-disc list-inside text-left text-gray-11 text-base space-y-1">
            <li>
              Use <Code variant="ghost">/feed add</Code> to subscribe to RSS
              feeds.
            </li>
            <li>
              Get AI summaries (toggle with{" "}
              <Code variant="ghost">summarize: true</Code>).
            </li>
            <li>
              Manage feeds with <Code variant="ghost">/feed</Code> (list,
              remove, etc.).
            </li>
            <li>
              Organize with <Code variant="ghost">/category</Code>.
            </li>
            <li>
              Add YouTube channels via <Code variant="ghost">/youtube add</Code>
              .
            </li>
          </ul>
        </Flex>

        <Flex gap="3" mt="4" justify="end" align="center">
          <Text size="2" className="text-gray-10 mr-auto text-base">
            Redirecting in {countdown}...
          </Text>
          <Dialog.Close>
            <Button className="cursor-pointer" variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button
            variant="solid"
            className=" bg-[#8264FA] hover:bg-[#8264FA] text-white cursor-pointer"
            onClick={() => {
              onOpenChange(false); // Close dialog first
              window.location.href = redirectUrl;
            }}
          >
            <DiscordLogoIcon className="size-4 mr-1" /> Add Now
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
