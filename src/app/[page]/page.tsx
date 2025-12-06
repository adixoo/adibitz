import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import path from "path";

interface PageProps {
  params: Promise<{ page: string }>;
}

async function getDoc(page: string) {
  const filePath = path.join(process.cwd(), "src/content", `${page}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  return { content, meta: data };
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      page: file.replace(/\.md$/, "")
    }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { page } = await params;
  const doc = await getDoc(page);
  if (!doc) return {};
  return {
    title: doc.meta.title || page,
    description: doc.meta.description || ""
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;
  const doc = await getDoc(page);

  if (!doc) {
    notFound();
  }
  console.log(doc.content);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10 pt-24">
      <article className="prose dark:prose-invert max-w-none">
        <Markdown>{doc.content}</Markdown>
      </article>
    </div>
  );
}
