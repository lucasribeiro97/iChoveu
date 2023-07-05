const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();

  if (!term || data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }

  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);

  const { current } = await response.json();

  return {
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    name: current.location.name,
    country: current.location.country,
    url: `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`,
  };
};
