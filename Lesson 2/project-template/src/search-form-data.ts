// Создать интерфейс SearchFormData, в котором описать структуру для полей поисковой формы.
// Написать функцию-обработчик формы search, которая собирает заполненные пользователем данные
// в формате описанной структуры и передаёт их в функцию поиска. Функция поиска принимает как
// аргумент переменную интерфейса SearchFormData, выводит полученный аргумент в консоль и ничего не возвращает.

interface SearchFormData {
  city: string;
  checkInDate: string;
  checkOutDate: string;
  maxPrice: string;
}

export function searchHandler() {
  const form = document.querySelector(".searchForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = document.querySelector("#city") as HTMLInputElement;
    const checkInDate = document.querySelector(
      "#check-in-date"
    ) as HTMLInputElement;
    const checkOutDate = document.querySelector(
      "#check-out-date"
    ) as HTMLInputElement;
    const maxPrice = document.querySelector("#max-price") as HTMLInputElement;

    const fullData: SearchFormData = {
      city: city.value,
      checkInDate: checkInDate.value,
      checkOutDate: checkOutDate.value,
      maxPrice: maxPrice.value,
    };

    executeSearch(fullData);
  });
}

function executeSearch(data) {
  console.log(data);
}
