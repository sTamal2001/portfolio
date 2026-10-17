import { navigation, site } from "@/config/site";
import { getResume } from "@/lib/resume";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Workflow } from "@/components/sections/workflow";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  const resume = getResume();

  // Structured data so search engines understand who this page is about.
  const sameAs = [site.links.github, site.links.linkedin].filter((link): link is string => Boolean(link));
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    ...(site.links.email ? { email: `mailto:${site.links.email}` } : {}),
    worksFor: { "@type": "Organization", name: "BlueHorse Software Solutions Pvt Ltd" },
    address: { "@type": "PostalAddress", addressRegion: "West Bengal", addressCountry: "IN" },
    knowsAbout: ["React", "Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Laravel", "PHP"],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <>
      <Header name={site.name} navigation={navigation} resume={resume} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero resume={resume} />
        <About />
        <Skills />
        <Projects />
        <ExperienceSection />
        <EducationSection />
        <Workflow />
        <Contact resume={resume} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
