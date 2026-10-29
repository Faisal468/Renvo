module.exports = {
  apps: [
    {
      name: 'renovvo-api',
      script: 'server.js',
      cwd: __dirname,
      autorestart: true,
      max_restarts: 10,
    },
  ],
}
