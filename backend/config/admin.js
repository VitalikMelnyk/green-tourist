module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c4b44231edf7d61116152de7194d831'),
  },
});
