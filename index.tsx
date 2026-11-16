import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { Skills } from "@/components/portfolio/Skills";
import { profile, socials } from "@/data/portfolio";

const title = `${profile.displayName} — Computer Science Student, Machine Learning & DSA`;
const description =
  "Portfolio of Gattupalli Abhinav Santosh, B.Tech CSE student at GRIET Hyderabad: ML projects in Python & TensorFlow, 300+ DSA problems solved, rank 7 of 1,044.";

// The home route ships no og:image, so hosting can inject the project's social preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.fullName,
          alternateName: profile.displayName,
          email: `mailto:${profile.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "Gokaraju Rangaraju Institute of Engineering and Technology",
          },
          knowsAbout: ["Machine Learning", "Neural Networks", "Data Structures & Algorithms", "Python", "TensorFlow"],
          sameAs: socials.filter((s) => s.kind !== "email").map((s) => s.href),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
