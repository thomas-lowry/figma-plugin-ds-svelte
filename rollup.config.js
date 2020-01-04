import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import svg from 'rollup-plugin-svg';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH

export default {
    input: 'src/test.js',
    output: {
        file: `public/components.js`,
        format: 'iife',
        name: 'components',
    },
    plugins: [
        svelte({
            include: ['src/**/*.svelte', 'node_modules/**/src/*.svelte'],
            dev: true,
        }),
        resolve(),
        commonjs(),
        svg(),
        postcss({
            plugins: []
        }),
        !production && serve('public'),
        !production && livereload('public'),
    ],
    watch: {
		clearScreen: false
	}
}