import * as prismic from '@prismicio/client';

const repoName = `sam-210608-fields`; // Fill in your repository name
const accessToken = ``; // If your repo is private, add an access token
const endpoint = prismic.getEndpoint(repoName);

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
	{
		type: 'example_custom_type',
		path: '/:uid'
	}
];

const createClient = (fetch) => {
	const clientOptions = {
		fetch,
		routes
	};
	const client = prismic.createClient(endpoint, clientOptions);
	return client;
};

export default createClient;
