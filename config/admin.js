module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '344f8f4777643aaa191d5b9a8c1afdf2'),
  },
});
