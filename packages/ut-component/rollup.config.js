import babel from "rollup-plugin-babel";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./index.js",
      format: "cjs"
    }
  ],
  plugins: [babel()],
  external: ["ramda"]
};
