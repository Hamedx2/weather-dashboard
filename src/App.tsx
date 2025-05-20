import "./utils/i18n/i18n.ts";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { WeatherProvider } from "./utils/contexts/WeatherContext.tsx";

import Layout from "./pages/Layout.tsx";
import Login from "./pages/Login.tsx";
import { loader as dashboardLoader } from "./components/dashboard/body/DashboardBody.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Spinner from "./components/dashboard/Spinner.tsx";
import { Suspense } from "react";
import BacktoLogin from "./components/dashboard/BacktoLogin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "/login", element: <Login /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader,
        hydrateFallbackElement: <BacktoLogin />,
      },
    ],
  },
]);

function App() {
  return (
    <WeatherProvider>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </WeatherProvider>
  );
}

export default App;
