/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: [''],
    },
    webpack(config, { isServer }) {
        // Disable the `canvas` module to prevent Webpack errors
        if (!isServer) {
            config.resolve.alias.canvas = false;
        }
        return config;
    }
};

export default nextConfig;
