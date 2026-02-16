"use client";
import { SplashPreloader, RoutePreloader } from "./Preloader";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SplashPreloader />
      <RoutePreloader />
      {children}
    </>
  );
}
