import { createBrowserRouter } from "react-router";
import { Layout }   from "./pages/Layout";
import { Home }     from "./pages/Home";
import { Services } from "./pages/Services";
import { Library }  from "./pages/Library";
import { Maps }     from "./pages/Maps";
import { Contact }  from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true,            Component: Home     },
        { path: "automate-grow",  Component: Services },
        { path: "quicklearn",     Component: Library  },
        { path: "umrah-tours",    Component: Maps     },
        { path: "contact",        Component: Contact  },
        { path: "*",              Component: NotFound },
      ],
    },
  ],
  { basename: "/" }
);
