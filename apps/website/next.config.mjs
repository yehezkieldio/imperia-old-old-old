const isDockerBuild = process.env.IS_DOCKER_BUILD === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...(isDockerBuild && { output: "standalone" }),
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
