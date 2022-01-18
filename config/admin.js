module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f7384a4a4b083416a9f10b36e9accf26'),
  },
});
