import Products from "./components/Products/Products";
import Offs from "./components/Offs/Offs";
import Orders from "./components/Orders/Orders";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";

const routes = [
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/offs",
    element: <Offs />,
  },
];

export default routes;
