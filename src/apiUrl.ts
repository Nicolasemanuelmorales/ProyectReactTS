const ENV = {
  dev: {
    apiUrl: "https://randomuser.me/api",
  },
  test: {
    apiUrl: "https://randomuser.me/api",
  },
  prod: {
    apiUrl: "https://randomuser.me/api",
  },
};

function getEnvVars() {
  if (process.env.NODE_ENV === "production") {
    return ENV.prod;
  }
  if (process.env.NODE_ENV === "test") {
    return ENV.test;
  }

  return ENV.dev;
}

export default getEnvVars;
