import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    document.addEventListener("beforeunload", handleStart);
    document.addEventListener("load", handleComplete);

    return () => {
      document.removeEventListener("beforeunload", handleStart);
      document.removeEventListener("load", handleComplete);
    };
  }, []);

  // Reset loading state when the route changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname, searchParams]);

  return isLoading;
}
