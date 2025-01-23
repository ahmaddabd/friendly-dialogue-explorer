export const lazyWithPreload = <T extends Promise<any>>(
  factory: () => T
): { preload: () => T; Component: React.LazyExoticComponent<any> } => {
  const Component = lazy(() => factory());
  return {
    preload: () => factory(),
    Component,
  };
};

export const preloadRoutes = () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      import('../../pages/Login');
      import('../../pages/Register');
    });
  }
};