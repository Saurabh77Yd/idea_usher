import BlogCard from "./components/BlogCard";
import { getBlogs } from "./lib/api";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;

  const { blogs, totalPages, currentPage, totalBlogs } = await getBlogs({
    page,
    limit: 6,
  });

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      if (currentPage <= 2) end = 4;
      if (currentPage >= totalPages - 1) start = totalPages - 3;
      if (start > 2) pages.push("...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
          Latest Blogs
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore stories, tutorials, and insights from creative minds.
        </p>
      </div>

      {/* Blog Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-x-6 gap-y-8
          place-items-stretch
        "
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {blogs.map((blog: any) => (
            <div
              key={blog.id}
              className="flex w-full h-full"
            >
              <BlogCard blog={blog} />
            </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-16">
        {/* Previous */}
        {currentPage > 1 ? (
          <Link
            href={`/?page=${currentPage - 1}`}
            className="px-5 py-2.5 bg-linear-to-r from-gray-200 to-gray-100 text-gray-700 rounded-full shadow-sm hover:from-blue-100 hover:to-purple-100 hover:text-blue-600 transition-all"
          >
            ← Previous
          </Link>
        ) : (
          <span className="px-5 py-2.5 bg-gray-100 text-gray-400 rounded-full cursor-not-allowed">
            ← Previous
          </span>
        )}

        {/* Page Numbers */}
        <div className="flex items-center gap-2 text-black">
          {pageNumbers.map((pageNum, i) =>
            pageNum === "..." ? (
              <span key={`ellipsis-${i}`} className="text-gray-500 px-2">
                ...
              </span>
            ) : (
              <Link
                key={pageNum}
                href={`/?page=${pageNum}`}
                className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                  currentPage === pageNum
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                    : "border-gray-300 hover:bg-linear-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                {pageNum}
              </Link>
            )
          )}
        </div>

        {/* Next */}
        {currentPage < totalPages ? (
          <Link
            href={`/?page=${currentPage + 1}`}
            className="px-5 py-2.5 bg-linear-to-r from-gray-200 to-gray-100 text-gray-700 rounded-full shadow-sm hover:from-blue-100 hover:to-purple-100 hover:text-blue-600 transition-all"
          >
            Next →
          </Link>
        ) : (
          <span className="px-5 py-2.5 bg-gray-100 text-gray-400 rounded-full cursor-not-allowed">
            Next →
          </span>
        )}
      </div>

      {/* Footer Info */}
      <div className="text-center mt-6 text-sm text-gray-500">
        Page <span className="font-semibold text-gray-700">{currentPage}</span>{" "}
        of {totalPages} •{" "}
        <span className="font-semibold text-gray-700">{totalBlogs}</span> blogs
      </div>
    </section>
  );
}

export default BlogListingPage;
