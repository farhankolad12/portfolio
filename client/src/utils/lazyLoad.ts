import { lazy } from "react";

export function lazyLoad(path: string) {
  return lazy(() => {
    const promise = import(path);
    return promise;
  });
}
