
    export { default } from "../../../build/server/server.js";

    export const config = {
      name: "React Router server handler",
      generator: "@netlify/vite-plugin-react-router@1.0.0",
      path: "/*",
      preferStatic: true,
    };
    