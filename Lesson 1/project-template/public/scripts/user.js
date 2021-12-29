import { renderBlock } from './lib.js';
export function renderUserBlock(userName = 'Wade Warren', userAvatar = '/img/avatar.png', favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount;
    const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false;
    const name = userName;
    const avatar = userAvatar;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBRSxRQUFRLEdBQUcsYUFBYSxFQUFFLFVBQVUsR0FBRyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDNUcsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUE7SUFDckYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ2hFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQTtJQUNyQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUE7SUFFekIsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLE1BQU07OzRCQUVYLElBQUk7O2tDQUVFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sgKHVzZXJOYW1lID0gJ1dhZGUgV2FycmVuJywgdXNlckF2YXRhciA9ICcvaW1nL2F2YXRhci5wbmcnLCBmYXZvcml0ZUl0ZW1zQW1vdW50KSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50IDwgMSA/ICfQvdC40YfQtdCz0L4g0L3QtdGCJyA6IGZhdm9yaXRlSXRlbXNBbW91bnRcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPj0gMSA/IHRydWUgOiBmYWxzZVxuICBjb25zdCBuYW1lID0gdXNlck5hbWVcbiAgY29uc3QgYXZhdGFyID0gdXNlckF2YXRhclxuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2F2YXRhcn1cIiBhbHQ9XCJXYWRlIFdhcnJlblwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibmFtZVwiPiR7bmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=