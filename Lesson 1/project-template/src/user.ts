import { renderBlock } from './lib.js'

export function renderUserBlock (userName = 'Wade Warren', userAvatar = '/img/avatar.png', favoriteItemsAmount) {
  const favoritesCaption = favoriteItemsAmount < 1 ? 'ничего нет' : favoriteItemsAmount
  const hasFavoriteItems = favoriteItemsAmount >= 1 ? true : false
  const name = userName
  const avatar = userAvatar

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
