import { useState } from "react";

export const useLoadings = (initialLoadings = {}) => {
  const [loadings, setLoadings] = useState(initialLoadings);

  const setLoading = (loading) =>
    setLoadings((prevIsLoadings) => ({
      ...prevIsLoadings,
      ...loading,
    }));

  const _setLoadings = (isLoading) => {
    const _loadings = {};

    Object.keys(loadings).forEach((loadingKey) => {
      _loadings[loadingKey] = isLoading;
    });

    setLoadings(_loadings);
  };

  const isLoadings = Object.values(loadings).some((isLoading) => isLoading);

  return [isLoadings, setLoading, _setLoadings];
};
