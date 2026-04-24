import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
};
