import * as dotenv from "dotenv";
dotenv.config();

module.exports = {
  name: "demo-expo",
  version: process.env.MY_CUSTOM_PROJECT_VERSION || "1.0.0",
  // All values in extra will be passed to your app.
  extra: {
    fact: process.env["REACT_APP_API"],
  },
};
