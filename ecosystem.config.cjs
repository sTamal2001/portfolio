// PM2 process definition for running the portfolio on a Linux server.
// Usage (from the project directory, after `npm ci && npm run build`):
//   pm2 start ecosystem.config.cjs
//
// The app binds to 127.0.0.1:3000 so it is only reachable through Nginx.
module.exports = {
  apps: [
    {
      name: "portfolio",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      env: {
        NODE_ENV: "production",
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: "300M",
    },
  ],
};
