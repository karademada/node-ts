import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import dev from "rollup-plugin-dev";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    dev({
      host: "localhost",
      port: 4000
    }),
    typescript(),
    commonjs(),
    resolve(),
  ],
  external: ['express', 'zod'],
};
