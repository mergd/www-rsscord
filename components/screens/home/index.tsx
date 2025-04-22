import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { Footer } from "@/components/ui/footer";
import { POSTS_DIRECTORY } from "@/lib/constants";
import { getPosts } from "@/lib/mdx";

import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "10px" }} />;

export default function Home() {
  const blogPosts = getPosts(POSTS_DIRECTORY);

  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <Image
          className="mb-2"
          src="/images/blockclock.png"
          alt="William"
          width={60}
          height={60}
        />
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1> Blog/Landing Page Template</h1>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>A landing page template for a blog.</p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category={POSTS_DIRECTORY} posts={blogPosts} />
      </FadeIn.Item>

      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
