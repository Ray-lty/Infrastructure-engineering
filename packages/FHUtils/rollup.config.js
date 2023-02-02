import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import clear from 'rollup-plugin-clear'
import terser from '@rollup/plugin-terser'

const outCjs = {
    dir: 'dist',
    format: 'cjs',
    entryFileNames: '[name].cjs.js',
}

const outEsm = {
    dir: 'dist',
    format: 'esm',
    entryFileNames: '[name].esm.js',
}

const genConfig = (outConfig) => {
    return {
        input: './src/index.ts',
        output: outConfig,
        plugins: [clear({
            targets: ['./dist'],
            watch: true, // default: false
        }), resolve(), commonjs(), typescript(), terser()],
    }
}

export default [
    genConfig(outCjs),
    genConfig(outEsm),
];