import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

export default [
	{
		input: "lib/index.ts",
		output: [
			{
				file: pkg.main,
				format: "cjs",
				sourcemap: true
			},
			{
				file: pkg.module,
				format: "esm",
				sourcemap: true
			}
		],
		plugins: [
			external(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: "./tsconfig.json" }),
			terser()
		],
		external: ["react", "react-dom", "styled-components"]
	},
	{
		input: "dist/esm/types/index.d.ts",
		output: [ { file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts.default()]
	}
];
