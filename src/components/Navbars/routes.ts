const routes: Route[] = [];

type Route = {
  path: string;
  name: string;
  visibleWhenLoggedIn?: boolean;
  visibleWhenLoggedOut?: boolean;
};

export default routes;
