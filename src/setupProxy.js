// App is an express application, we can add an express middleware that will set headers for manifest.json request
// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually

export default (app) => {
	app.use("/manifest.json", (_req, res, next) => {
		res.set({
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
		});
		next();
	});
};
