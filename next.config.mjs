/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'icons.llama.fi',  // For DeFiLlama protocol icons
          'raw.githubusercontent.com',  // Sometimes used for protocol icons
          'assets.coingecko.com'  // In case we need CoinGecko images
        ],
      },
};

export default nextConfig;
