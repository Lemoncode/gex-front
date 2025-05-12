export const ENV = {
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: Number(process.env.PORT),
  SIMULATED_DELAY: +process.env.SIMULATED_DELAY,
  AUTH_SECRET: process.env.AUTH_SECRET,
};
