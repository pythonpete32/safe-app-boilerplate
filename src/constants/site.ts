const getSiteUrl = () => {
	const url = import.meta.env.VITE_PRODUCTION_URL;
	if (url) return `https://${import.meta.env.VITE_PRODUCTION_URL}`;
	return "http://localhost:3000";
};

export const SITE_URL = getSiteUrl();
console.log(SITE_URL);
export const APP_NAME = "Safe App Boilerplate";
