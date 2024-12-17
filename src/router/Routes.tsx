import HomePage from "../pages/Home/Index"; // Make sure the path is correct
import ProtectedRoute from "../components/Common/ProtectedRoute/Index";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  // Add other routes here
  // {
  //   path: "/profile",
  //   element: <ProfilePage />,
  // },
];
