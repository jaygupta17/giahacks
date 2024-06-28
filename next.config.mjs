/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:{
            allowedOrigins : ["localhost:8000" , "localhost:3000"]
        }
    }
};

export default nextConfig;
