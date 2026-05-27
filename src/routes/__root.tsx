import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { AuthProvider } from "@/hooks/use-auth";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-gradient">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found.</p>
        <Link to="/" className="mt-6 inline-block rounded-md bg-brand-gradient px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-4 rounded-md bg-brand-gradient px-4 py-2 text-sm text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3b5bdb" },
      { title: "Industrial Automation _ Revise National Diploma Automation" },
      { name: "description", content: "Real exam questions turned into interactive Q&A flashcards for National Diploma Automation students." },
      { property: "og:title", content: "Industrial Automation _ Revise National Diploma Automation" },
      { name: "twitter:title", content: "Industrial Automation _ Revise National Diploma Automation" },
      { property: "og:description", content: "Real exam questions turned into interactive Q&A flashcards for National Diploma Automation students." },
      { name: "twitter:description", content: "Real exam questions turned into interactive Q&A flashcards for National Diploma Automation students." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/688b1e42-e74d-4618-89e6-b14d1f6884a4/id-preview-3b163305--2c9e0cb8-22c1-4984-b787-2324cf3a134c.lovable.app-1779754316175.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/688b1e42-e74d-4618-89e6-b14d1f6884a4/id-preview-3b163305--2c9e0cb8-22c1-4984-b787-2324cf3a134c.lovable.app-1779754316175.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/icon-192.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icon-192.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Outlet />
        <Toaster richColors theme="dark" />
      </AuthProvider>
    </QueryClientProvider>
  );
}
