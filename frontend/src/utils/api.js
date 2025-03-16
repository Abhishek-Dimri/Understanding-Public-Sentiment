const BASE_URL = 'http://localhost:5000';

export const fetchData = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  const data = await response.json();
  return data;
};
