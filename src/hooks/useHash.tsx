import React, { useState, useCallback, useEffect } from 'react';

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);


  const handleChangeEvent = useCallback(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {

    window.addEventListener('hashchange', handleChangeEvent);

    return () => {
      window.removeEventListener('hashchange', handleChangeEvent);
    };
  }, [handleChangeEvent]);


  const updateHash = useCallback((newHash: string) => {

    if (newHash !== hash) {
      window.location.hash = newHash;
    }
  }, [hash]);


  return [hash, updateHash];
};

export default useHash;
