import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = `${site.brandName} | ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social sharing card, generated at build time from the site config. */
export default function OpenGraphImage() {
  const stack = ["React", "Node.js", "Laravel", "REST APIs", "PostgreSQL"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#060b17",
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#e8edf6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#4d9bff",
              color: "#06101f",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            TL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{site.brandName}</div>
            <div style={{ fontSize: 22, color: "#8391a8" }}>{`${site.name} · ${site.role} · ${site.location}`}</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 60, fontWeight: 600, lineHeight: 1.12, letterSpacing: -2, maxWidth: 980 }}>
          {site.headline}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {stack.map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 8,
                  border: "1px solid #2a3a58",
                  fontSize: 22,
                  color: "#a6b2c5",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#4d9bff" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
      </div>
    ),
    size,
  );
}
