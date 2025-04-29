import * as FadeIn from "@/components/motion/staggers/fade";

import fs from "fs";
import path from "path";

import { Heading, Text } from "@radix-ui/themes";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function ChangelogPage() {
  const changelogPath = path.join(
    process.cwd(),
    "app",
    "(posts)",
    "changelog",
    "changelog.mdx",
  );
  const fileContent = fs.readFileSync(changelogPath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <FadeIn.Container className="max-w-3xl mx-auto p-4">
      <FadeIn.Item>
        <Heading size="8" className="">
          Changelog
        </Heading>
      </FadeIn.Item>
      <FadeIn.Item>
        <Text size="2" className="text-gray-10 mt-4">
          Last updated: {data.time?.updated || "N/A"}
        </Text>
      </FadeIn.Item>
      <FadeIn.Item>
        <MDXRemote source={content} />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
