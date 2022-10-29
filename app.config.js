import * as dotenv from "dotenv";
dotenv.config();
export default ({ config }) => {
  return {
    ...config,
    // All values in extra will be passed to your app.
    extra: {
      eas: {
        projectId: "c56e401e-3e68-424c-96b0-22e083f1fef8",
      },
      fact: process.env["REACT_APP_API"],
    },
  };
};
