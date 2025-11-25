/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    // Don't set distDir - let Next.js use default .next for dev, we'll copy to dist after build
    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
}

export default nextConfig