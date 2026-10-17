import { about } from "@/config/site";
import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Building useful software, from the database to the interface.">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-[1.0625rem] lg:col-span-6 lg:col-start-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside aria-labelledby="focus-title" className="lg:col-span-3">
          <h3 id="focus-title" className="font-mono text-xs tracking-wide text-faint uppercase">
            What I focus on
          </h3>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {about.focus.map((item) => (
              <li key={item.title} className="py-3.5">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-sm leading-snug text-faint">{item.description}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
