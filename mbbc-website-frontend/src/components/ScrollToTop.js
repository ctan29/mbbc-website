import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Thanks to code from https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md */
/* Makes sure every page starts at the top when routed to, regardless of previous page */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
