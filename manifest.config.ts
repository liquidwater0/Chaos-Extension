import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: "Chaos Extension",
  version: pkg.version,
  icons: {
    48: 'public/logo.png',
  },
  options_ui: {
		page: "src/options/index.html",
		open_in_tab: false
	},
  action: {
    default_icon: {
      48: 'public/logo.png',
    },
    default_popup: 'src/popup/index.html',
  },
  permissions: [
    'storage',
  ],
  content_scripts: [{
    js: ['src/content/main.tsx'],
    matches: ['https://*/*']
  }],
  background: {
    service_worker: "src/background.ts",
    type: "module"
  }
})
