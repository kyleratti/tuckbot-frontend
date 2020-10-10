import * as React from "react";
import { useLocation } from "react-router-dom";

export function setTitle(title: string) {
  const suffix = useLocation().pathname.startsWith("/admin/") ? " Admin" : "";

  React.useEffect(() => {
    document.title = `${title} 🐶 Tuckbot${suffix}`;
  }, [title]);
}
