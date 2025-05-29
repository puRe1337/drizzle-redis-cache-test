import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // You can add custom logic here, such as authentication or session handling
    // For example, you could check if the user is authenticated and set a session variable

    if (event.url.pathname.startsWith('/.well-known/appspecific/com.chrome.devtools.json')) {
        return new Response();
    }

    // Call the resolve function to continue processing the request
    const response = await resolve(event);

    // You can modify the response here if needed
    return response;
};