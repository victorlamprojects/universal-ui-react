import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import external from "rollup-plugin-peer-deps-external";

import pkg from "./package.json";

const defaultConfigs = {
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
		external: [
			"react",
			"react-dom",
			"react-router-dom",
			"styled-components"
		]
}

const loadModuleConfigs = (name) => {
	return {
		...defaultConfigs,
		input: "lib/" + name + "/index.ts",
		output: defaultConfigs.output.map(o => {
			return {
				...o,
				"file": o.file.replace("index.js", name + ".js")
			}
		})
	}
}

export default [
	defaultConfigs,
	loadModuleConfigs("theme"),
	loadModuleConfigs("widgets"),
	{
		input: "dist/esm/types/index.d.ts",
		output: [ { file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()]
	}
];
