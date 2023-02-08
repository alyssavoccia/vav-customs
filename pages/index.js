import About from "@/components/About"
import BlogSection from "@/components/BlogSection"
import Gallery from "@/components/Gallery"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Services from "@/components/Services"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BlogSection />
    </Layout>
  )
}