"use client";

import * as FadeIn from "@/components/motion/staggers/fade";
import { Footer } from "@/components/ui/footer";
import { GuideDialog } from "@/components/ui/guide-dialog";
import { POSTS_DIRECTORY } from "@/lib/constants";
import { getPosts } from "@/lib/mdx";

import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const blogPosts = getPosts(POSTS_DIRECTORY);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const discordInviteLink =
    "https://discord.com/oauth2/authorize?client_id=1359049476207280169";

  return (
    <FadeIn.Container className="flex flex-col min-h-screen">
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="flex-grow md:-mt-64 text-center"
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
            Customize your feeds and stay informed with AI-powered insights
            using simple slash commands.
          </Text>
        </FadeIn.Item>
        <FadeIn.Item>
          <Button
            size="3"
            variant="solid"
            highContrast
            className="cursor-pointer my-4 bg-[#8264FA] hover:bg-[#8264FA] text-white px-4 py-2 rounded-base"
            onClick={() => setIsGuideOpen(true)}
          >
            <DiscordLogoIcon className="size-4 mr-2" />
            Add to Discord
          </Button>
        </FadeIn.Item>
        <FadeIn.Item>
          <Text size="2" className="text-gray-10 mt-8 text-base">
            Self-hosting & Open Source coming soon!
          </Text>
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-12 md:mb-0 gap-4 mt-6 justify-center">
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
