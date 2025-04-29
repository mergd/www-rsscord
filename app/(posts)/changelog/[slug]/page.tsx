import { notFound } from "next/navigation";
import { getPosts } from "@/lib/mdx";
import { CHANGELOG_DIRECTORY } from "@/lib/constants";
import Post from "@/components/posts";

export default function ChangelogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getPosts(CHANGELOG_DIRECTORY);
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return <Post post={post} />;
}

export function generateStaticParams() {
  const posts = getPosts(CHANGELOG_DIRECTORY);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
