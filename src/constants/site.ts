const getSiteUrl = () => {
	if (process.env.PRODUCTION_URL) return `https://${process.env.PRODUCTION_URL}`;
	return "http://localhost:3000";
};

export const SITE_URL = getSiteUrl();
export const APP_NAME = "Safe App Boilerplate";
