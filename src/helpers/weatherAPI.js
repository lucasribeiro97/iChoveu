export const searchCities = async (term) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (!term || data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }

  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
