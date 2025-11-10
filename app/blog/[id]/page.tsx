import { getBlogById } from "@/app/lib/api";
import Image from "next/image";
import Link from "next/link";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const dynamic = "force-dynamic";

async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const blog = await getBlogById(id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-600">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Blog Not Found</h2>
          <p className="text-gray-500">The requested blog could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <Image
          src={blog.photo_url}
          alt={blog.title}
          fill
          className="object-cover scale-105 hover:scale-110 transition-transform duration-4000 ease-out"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-10">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-3 text-sm text-gray-200">
            <span className="bg-blue-600/80 backdrop-blur-sm px-3 py-1 rounded-full shadow hover:scale-105 transition-transform">
              {blog.category.toUpperCase()}
            </span>
            <span className="opacity-90">Author ID: {blog.user_id}</span>
            <span className="opacity-90">
              Published: {new Date(blog.created_at).toLocaleDateString()}
            </span>
            <span className="opacity-90">
              Updated: {new Date(blog.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        {/* Description */}
        {blog.description && (
          <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-10 hover:translate-x-1 transition-transform duration-300">
            “{blog.description}”
          </blockquote>
        )}

        {/* Blog Content */}
        <article
          className="prose prose-lg max-w-none prose-blue prose-headings:text-gray-800 prose-p:leading-relaxed hover:prose-a:text-blue-700 transition-all duration-300"
          dangerouslySetInnerHTML={{ __html: blog.content_html }}
        />

        {/* Details Section */}
        <section className="mt-16 bg-white/60 backdrop-blur-sm shadow-md rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" /> Blog Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">Blog ID:</span> {blog.id}
            </p>
            <p>
              <span className="font-semibold text-gray-800">User ID:</span> {blog.user_id}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Category:</span> {blog.category}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Created At:</span>{" "}
              {new Date(blog.created_at).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-gray-800">Last Updated:</span>{" "}
              {new Date(blog.updated_at).toLocaleString()}
            </p>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-blue-300 hover:-translate-y-1"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BlogPage;
