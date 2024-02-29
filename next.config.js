/** @type {import('next').NextConfig} */

/** This is needed to run on replit **/
module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ['3406d0ba-2452-438d-ae18-64541cf5e237-00-3o4a7nixg9qaw.janeway.repl.co'],
    },
  },
}