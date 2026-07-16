import { defineConfig } from 'vite';

export default defineConfig({
  // 💡 ここを './' から '/homepage/' に変更します（あなたのGitHubのリポジトリ名）
  base: '/homepage/', 
  
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});