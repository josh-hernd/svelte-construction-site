import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot, type UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), '/post']
		}
	}
};

export default config;
