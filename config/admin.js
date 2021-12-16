module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afb5b7d331538fca86d8a7c74249a59a'),
  },
});
