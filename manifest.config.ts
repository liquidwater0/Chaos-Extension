import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json';

export default defineManifest({
  manifest_version: 3,
  name: "Chaos Extension",
  version: pkg.version,
  icons: {
    16: 'public/icon_16.png',
    32: 'public/icon_32.png',
    48: 'public/icon_48.png',
    128: 'public/icon_128.png'
  },
  options_ui: {
		page: "src/options/index.html",
		open_in_tab: false
	},
  action: {
    default_icon: {
      16: 'public/icon_16.png'
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
