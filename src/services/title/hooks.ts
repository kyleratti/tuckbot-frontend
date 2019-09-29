import * as React from "react";

export function setTitle(title: string) {
  React.useEffect(() => {
    document.title = `${title} 🐶 Tuckbot`;
  }, [title]);
}
