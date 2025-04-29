import Posts from "@/components/screens/posts";
import { CHANGELOG_DIRECTORY } from "@/lib/constants";

export default function ChangelogPage() {
  return <Posts directory={CHANGELOG_DIRECTORY} title="Changelog" />;
}
