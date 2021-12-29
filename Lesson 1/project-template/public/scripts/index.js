import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
window.addEventListener("DOMContentLoaded", () => {
    renderUserBlock("Андрей", "/img/avatar.png", "10");
    renderSearchFormBlock("", "");
    renderSearchStubBlock();
    // renderToast(
    //     {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    //     {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    // )
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc1QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQy9DLGVBQWUsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQscUJBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsZUFBZTtJQUNmLDRGQUE0RjtJQUM1RiwyRUFBMkU7SUFDM0UsSUFBSTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyU2VhcmNoRm9ybUJsb2NrIH0gZnJvbSBcIi4vc2VhcmNoLWZvcm0uanNcIjtcbmltcG9ydCB7IHJlbmRlclNlYXJjaFN0dWJCbG9jayB9IGZyb20gXCIuL3NlYXJjaC1yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJVc2VyQmxvY2sgfSBmcm9tIFwiLi91c2VyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJUb2FzdCB9IGZyb20gXCIuL2xpYi5qc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJVc2VyQmxvY2soXCLQkNC90LTRgNC10LlcIiwgXCIvaW1nL2F2YXRhci5wbmdcIiwgXCIxMFwiKTtcbiAgcmVuZGVyU2VhcmNoRm9ybUJsb2NrKFwiXCIsIFwiXCIpO1xuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKTtcbiAgLy8gcmVuZGVyVG9hc3QoXG4gIC8vICAgICB7dGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JywgdHlwZTogJ3N1Y2Nlc3MnfSxcbiAgLy8gICAgIHtuYW1lOiAn0J/QvtC90Y/QuycsIGhhbmRsZXI6ICgpID0+IHtjb25zb2xlLmxvZygn0KPQstC10LTQvtC80LvQtdC90LjQtSDQt9Cw0LrRgNGL0YLQvicpfX1cbiAgLy8gKVxufSk7XG4iXX0=