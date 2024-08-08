import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import routes from "./routes";
import { RouterProvider } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_APP_BASE_URL ?? "/",
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
