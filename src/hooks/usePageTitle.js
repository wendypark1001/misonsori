import { useEffect } from 'react';

export function usePageTitle(title) {
  useEffect(() => {
    if (!title) return;
    document.title = `${title} | 미손소리`;
  }, [title]);
} 