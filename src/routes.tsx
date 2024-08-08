import type { RouteObject } from "react-router";
import PokemonDetailPage from "./pages/PokemonDetail";
import HomePage from "./pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetailPage />,
  },
];

export default routes;
