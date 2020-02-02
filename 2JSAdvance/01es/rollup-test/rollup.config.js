import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
	entry: 'src/index.js',
	format: 'umd',
	plugins:[
		resolve(),
		babel({
			exclude:'nodel_modules/**',
		})
	],
	dest: 'build/bundle.js'
}