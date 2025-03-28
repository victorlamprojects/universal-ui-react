import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const defaultConfigs = () => ({
		input: "lib/index.ts",
		plugins: [
            peerDepsExternal(),
			resolve(),
			commonjs(),
			terser()
		],
		external: [
			"react",
			"react-dom",
			"react-router-dom",
			"styled-components"
		]
})

const getCjsConfig = () => {
    const config = defaultConfigs();
    return {
        ...config,
        output: [{
            file: "dist/cjs/index.js",
            format: "cjs",
            sourcemap: true
        }],
        plugins: [
            ...config.plugins,
            typescript({
                "compilerOptions": {
                    declaration: false,
                    declarationDir: undefined,
                }
            })
        ]
    }
}

const getEsmConfig = () => {
    const config = defaultConfigs();
    return {
        ...config,
        output: [{
            file: "dist/esm/index.js",
            format: "esm",
            sourcemap: true
        }],
        plugins: [...config.plugins, typescript({ tsconfig: "./tsconfig.json" })]
    }
}

export default [
	getCjsConfig(),
    getEsmConfig(),
	{
		input: "dist/esm/types/index.d.ts",
		output: [ { file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()]
	}
];
