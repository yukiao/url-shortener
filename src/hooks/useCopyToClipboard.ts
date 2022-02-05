import { useState, useEffect, useCallback } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(
  resetInterval: null | number
): [boolean, (text: string | number) => void] {
  const [isCopied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback((text: string | number) => {
    copy(text.toString());
    setCopied(true);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}
