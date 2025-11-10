export const metadata = {
  title: "About | MyBlog",
};

function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <section className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
          About MyBlog
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Welcome to <span className="font-semibold text-gray-800">MyBlog</span> — 
          a space where creativity meets clarity. We share articles on technology, 
          development, design, and inspiration to help you grow as a creator and learner.
        </p>

        {/* Story */}
        <div className="bg-white shadow-md rounded-2xl p-8 mb-10 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2025, MyBlog started as a small project to share web development 
            knowledge and insights. Over time, it evolved into a community-driven platform 
            where developers, designers, and thinkers come together to exchange ideas 
            and grow collectively.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-sm text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals through knowledge — making complex topics 
            simple, accessible, and engaging. Whether you’re a beginner or 
            a professional, our goal is to inspire you to keep learning and creating.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>
            ✨ Built with ❤️ using{" "}
            <span className="text-blue-600 font-medium">Next.js</span> &{" "}
            <span className="text-purple-600 font-medium">Tailwind CSS</span>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
