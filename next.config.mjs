/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: 'dist',  // Write static export to dist/ (matches CI S3 sync)
    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },
    // trailingSlash: true,

}

export default nextConfig