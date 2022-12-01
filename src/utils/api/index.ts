type getApiDataFromNasaApiBySearchType = (q: string) => Promise<void>;

export const getApiDataFromNasaApiBySearch = async (q: string) => {
  const response = await fetch(`https://images-api.nasa.gov/search?q=${q}`);
  const data = await response.json();
  return data;
};

export const getApiData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
