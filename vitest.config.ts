import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		setupFiles: ['./src/config/mongo-memory-server.ts'],
		exclude: [...configDefaults.exclude, 'src/client'],
	},
});
