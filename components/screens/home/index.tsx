"use client";

import * as FadeIn from "@/components/motion/staggers/fade";
import { Footer } from "@/components/ui/footer";
import { GuideDialog } from "@/components/ui/guide-dialog";

import fs from "fs";
import path from "path";

import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const discordInviteLink =
    "https://discord.com/oauth2/authorize?client_id=1359049476207280169";

  return (
    <FadeIn.Container className="flex flex-col ">
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="flex-grow  text-center"
      >
        <FadeIn.Item>
          <Image
            className="mb-2"
            src="/images/discorss.png"
            alt="Discorss"
            width={60}
            height={60}
          />
        </FadeIn.Item>
        <FadeIn.Item>
          <Heading size="8" className="text-[#8264FA] mb-1">
            Discorss
          </Heading>
        </FadeIn.Item>
        <FadeIn.Item>
          <Text size="4" className="text-gray-11 max-w-md mx-auto text-base">
            Your RSS feeds, brilliantly summarized and delivered straight to
            Discord.
            <br />
            <br />
            Use slash commands to customize your feeds.
          </Text>
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="flex gap-4 mt-4 items-center justify-center">
            <Button
              size="3"
              variant="solid"
              highContrast
              className="cursor-pointer bg-[#8264FA] hover:bg-[#8264FA] text-white px-4 py-2 rounded-base"
              onClick={() => setIsGuideOpen(true)}
            >
              <DiscordLogoIcon className="size-4 mr-2" />
              Add to Discord
            </Button>
            <Link
              href="https://github.com/mergd/discorss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                size="3"
                variant="ghost"
                color="gray"
                highContrast
                className="cursor-pointer gap-2 text-gray-11 hover:text-gray-12"
              >
                <GitHubLogoIcon className="size-5" />
                View on GitHub
              </IconButton>
            </Link>
          </div>
        </FadeIn.Item>

        <FadeIn.Item>
          <div className="grid grid-cols-1 md:grid-cols-2 pb-12 md:mb-0 gap-4 mt-6 justify-center">
            <Image
              src="/images/feed-list.png"
              alt="Discorss Feed List Example"
              width={300}
              height={200}
              className="rounded-lg shadow-lg border border-gray-a3"
            />
            <Image
              src="/images/feed-post.png"
              alt="Discorss Feed Post Example"
              width={300}
              height={200}
              className="rounded-lg shadow-lg border border-gray-a3"
            />
            <Image
              src="/images/feed-summary.png"
              alt="Discorss Feed Summary Example"
              width={300}
              height={200}
              className="rounded-lg shadow-lg border border-gray-a3"
            />
          </div>
        </FadeIn.Item>
      </Flex>

      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>

      <GuideDialog
        isOpen={isGuideOpen}
        onOpenChange={setIsGuideOpen}
        redirectUrl={discordInviteLink}
        countdownSeconds={5}
      />
    </FadeIn.Container>
  );
}
