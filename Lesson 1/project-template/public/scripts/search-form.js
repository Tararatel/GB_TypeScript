import { renderBlock } from "./lib.js";
export function renderSearchFormBlock(arrivalDate, departureDate) {
    const date = new Date();
    const minDate = new Date().toISOString().split("T")[0];
    const maxDate = new Date(date.getFullYear(), date.getMonth() + 2, 0)
        .toISOString()
        .split("T")[0];
    const nextDay = (arrivalDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2)
        .toISOString()
        .split("T")[0]);
    const departuretDay = (departureDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4)
        .toISOString()
        .split("T")[0]);
    renderBlock("search-form-block", `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDate}" min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departureDate}" min="${nextDay}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCLENBQUMsV0FBVyxFQUFFLGFBQWE7SUFDOUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakUsV0FBVyxFQUFFO1NBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLE1BQU0sT0FBTyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUNyQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNuQjtTQUNFLFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLE1BQU0sYUFBYSxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksSUFBSSxDQUM3QyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNuQjtTQUNFLFdBQVcsRUFBRTtTQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxCLFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWlCdUQsV0FBVyxVQUFVLE9BQU8sVUFBVSxPQUFPOzs7OzREQUk1QyxhQUFhLFVBQVUsT0FBTyxVQUFVLE9BQU87Ozs7Ozs7Ozs7OztLQVl0RyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tIFwiLi9saWIuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhhcnJpdmFsRGF0ZSwgZGVwYXJ0dXJlRGF0ZSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSArIDIsIDApXG4gICAgLnRvSVNPU3RyaW5nKClcbiAgICAuc3BsaXQoXCJUXCIpWzBdO1xuICBjb25zdCBuZXh0RGF5ID0gKGFycml2YWxEYXRlID0gbmV3IERhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICBkYXRlLmdldERhdGUoKSArIDJcbiAgKVxuICAgIC50b0lTT1N0cmluZygpXG4gICAgLnNwbGl0KFwiVFwiKVswXSk7XG4gIGNvbnN0IGRlcGFydHVyZXREYXkgPSAoZGVwYXJ0dXJlRGF0ZSA9IG5ldyBEYXRlKFxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBkYXRlLmdldE1vbnRoKCksXG4gICAgZGF0ZS5nZXREYXRlKCkgKyA0XG4gIClcbiAgICAudG9JU09TdHJpbmcoKVxuICAgIC5zcGxpdChcIlRcIilbMF0pO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgIFwic2VhcmNoLWZvcm0tYmxvY2tcIixcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2Fycml2YWxEYXRlfVwiIG1pbj1cIiR7bWluRGF0ZX1cIiBtYXg9XCIke21heERhdGV9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkZXBhcnR1cmVEYXRlfVwiIG1pbj1cIiR7bmV4dERheX1cIiBtYXg9XCIke21heERhdGV9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApO1xufVxuIl19