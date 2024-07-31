import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
  });

const isProtectedRoute = createRouteMatcher ([
    // '/dashboard(.*) ',
    "/"
  ]);

  export const config = {
    matcher: [
      '/((?!.*\\..*|_next).*)', // Matches all paths except for static files and Next.js internals
      '/(api|trpc)(.*)', // Matches API routes
      '/', // Matches the root path
    ],
  };