import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shubh Rathore | Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid lines background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow orb top-right */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Glow orb bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: 100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          {/* Label */}
          <div
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#00ff88",
              marginBottom: 24,
              display: "flex",
            }}
          >
            PORTFOLIO
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#e4e4e7",
              lineHeight: 1.1,
              marginBottom: 16,
              display: "flex",
            }}
          >
            Shubh Rathore
          </div>

          {/* Role */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#00ff88",
              marginBottom: 40,
              display: "flex",
            }}
          >
            Backend Developer
          </div>

          {/* Tech chips */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              "Node.js",
              "TypeScript",
              "MongoDB",
              "PostgreSQL",
              "Solidity",
              "FastAPI",
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  borderRadius: 9999,
                  padding: "8px 20px",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#e4e4e7",
                  display: "flex",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "#71717a",
            display: "flex",
          }}
        >
          shubh-dev.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
