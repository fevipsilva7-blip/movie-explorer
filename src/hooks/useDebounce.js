import { useEffect, useState } from 'react';

// Evita disparar uma chamada de API a cada tecla digitada.
export function useDebounce(value, delay = 450) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
