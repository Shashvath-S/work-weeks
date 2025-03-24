import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: `http://localhost:${process.env.PORT || 3000}`,
    NEXTAUTH_SECRET: "fp4nAlzTLUA3k+GTz0M284t1oh9ly5U2ZT69OriB2S0="
  }
};

export default nextConfig;
