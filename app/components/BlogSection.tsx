import Image from "next/image";

const posts = [
  {
    title: "Why Your Google Ads Campaign Isn't Delivering Results (And What to Fix First)",
    excerpt:
      "You've got the campaign running. The clicks are coming in. But something's off. No leads. Or worse, leads that go nowhere. Just noise. If that feels...",
    image: "/googlead.jpg",
  },
  {
    title: "Why Your Google Ads Costs Keep Climbing (And What You Can Do)",
    excerpt:
      "If you've ever launched a Google Ads campaign and found yourself staring at the budget going up... faster than the leads coming in? You're not...",
    image: "/costs.jpg",
  },
  {
    title: "How Much Should a Small Business Really Spend on Google Ads?",
    excerpt:
      "When small business owners think about running Google Ads, one fear almost always creeps in: \"How much should I actually spend without just...",
    image: "/smallbusiness.webp",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-black px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Our Recent Blogs</h2>
            <p className="mt-2 text-gray-400 text-sm md:text-base leading-relaxed">
              Get a better understanding on SEO, digital marketing with our official blogs, articles and guides.
            </p>
          </div>
          <span className="flex-shrink-0 self-start sm:self-center px-5 py-2.5 rounded-lg border border-cyan-500 text-cyan-400 text-sm font-semibold">
            View All Posts
          </span>
        </div>

        {/* Blog cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-gray-900 rounded-2xl border border-white/10 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-white font-bold text-base leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
