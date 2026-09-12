cat << 'EOF' > astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Dev-TRANs.github.io',
  base: '/Tohoku-seitokai',
});
EOF

git add astro.config.mjs
git commit -m "chore: GitHub Pages 用に base パスを設定"
git push origin main
