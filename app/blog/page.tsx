import { Header } from "../components/Header";
import { BlogSection } from "../components/BlogSection";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="pt-24">
        <BlogSection />
      </div>
    </div>
  );
}
