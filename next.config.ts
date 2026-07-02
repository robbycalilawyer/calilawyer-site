import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Expose the lead endpoint to the client bundle at build time.
  // Falls back to empty string; LeadForm handles the unset case.
  env: {
    LEAD_ENDPOINT: process.env.LEAD_ENDPOINT ?? "",
  },
};

export default nextConfig;
