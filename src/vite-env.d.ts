/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_PRODUCTION_URL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
