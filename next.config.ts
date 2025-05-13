import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Your existing configuration...
  
  // Add webpack configuration to handle bcrypt
  webpack: (config, { isServer }) => {
    // If it's a server build, add externals to prevent bcrypt from being bundled
    if (isServer) {
      config.externals = [...(config.externals || []), 'bcrypt'];
    }
    
    return config;
  },
  
  // Skip type checking during build for faster builds (optional)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;