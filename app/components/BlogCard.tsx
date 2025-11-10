import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    description: string;
    photo_url: string;
    category: string;
    created_at: string;
  };
}

function BlogCard({ blog }: BlogCardProps) {
  if (!blog.id) {
    console.error("Blog card has invalid ID:", blog);
    return null;
  }

  return (
   <Link href={`/blog/${blog.id}`} className="block group w-full h-full">
  <article
    className="
      relative bg-white rounded-2xl overflow-hidden
      flex flex-col h-full
      hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out
    "
  >
    {/* Animated Border */}
    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-md">
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 rounded-2xl animate-pulse-slow" />
    </div>

    {/* Main Content Container */}
    <div className="relative bg-white rounded-2xl flex flex-col h-full m-0.5 overflow-hidden z-10">
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden shrink-0">
        <Image
          src={blog.photo_url}
          alt={blog.title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-linear-to-r from-blue-600 to-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <time
            dateTime={blog.created_at}
            className="text-sm text-gray-500 mb-2 block"
          >
            {new Date(blog.created_at).toLocaleDateString()}
          </time>

          <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3">
            {blog.description}
          </p>
        </div>

        {/* Read More */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-all duration-300">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>

    {/* Floating Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-blue-500/20 via-transparent to-purple-600/20 rounded-2xl blur-xl transition-opacity duration-700 -z-10" />
  </article>
</Link>

  );
}

export default BlogCard;
