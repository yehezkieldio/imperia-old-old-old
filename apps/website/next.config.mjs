const isDockerBuild = process.env.IS_DOCKER_BUILD === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: isDockerBuild ? { standalone: true } : {},
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
