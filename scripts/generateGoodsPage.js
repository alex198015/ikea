import {getData} from './getData.js'
import {user} from './userData.js'
// const wishlist = []

const COUNTER = 6

const generateGoodsPage = () => {

    const mainHeader = document.querySelector('.main-header')
    

    const generateCards = (data) => {

        const goodList = document.querySelector('.goods-list')
        
        goodList.textContent = ''

        if(!data.length){
            const goods = document.querySelector('.goods')
            goods.textContent = location.search === '?wishlist' ? 'Список желаний пуст' : 'К сожалению по вашему запросу ничего не найдено'
        }
        data.forEach(item => {

            const {id, img: image, name: ltemName, description, price, count} = item


            goodList.insertAdjacentHTML('afterbegin', `
                    <li class="goods-list__item">
                    <a class="goods-item__link" href="card.html#${id}">
                        <article class="goods-item">
                            <div class="goods-item__img">
                                <img src=${image[0]}
                                    ${ image[1] && `data-second-image=${image[1]}`} alt="${ltemName}">
                            </div>
                            ${count > COUNTER ? '<p class="goods-item__new">Новинка</p>' : ''}
                            ${!count ? '<p class="goods-item__new">Нет в наличии</p>' : ''}
                            <h3 class="goods-item__header">${ltemName}</h3>
                            <p class="goods-item__description">${description}</p>
                            <p class="goods-item__price">
                                <span class="goods-item__price-value">${price}</span>
                                <span class="goods-item__currency"> ₽</span>
                            </p>
                            ${count ? `<button class="btn btn-add-card" aria-label="Добравить в корзину" data-idd="${id}"></button>` : ''}
                            
                        </article>
                    </a>
                </li>
            `
            )
        })

        goodList.addEventListener('click', event => {
    
            const btnAddCaard = event.target.closest('.btn-add-card')
            
            if(btnAddCaard) {
                
                event.preventDefault()
                user.cartList = btnAddCaard.dataset.idd
                
            }
            
        }) 
    }


    if(location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search)
        // const prop = search.split('=')[0].slice(1)
        const prop = search.split('=')[0].substring(1)
        const value = search.split('=')[1]
        
        if(prop === 's'){
           getData.search(value, generateCards)
           mainHeader.textContent = `Поиск: ${value}`
        } else if(prop === 'wishlist') {
            getData.wishList(user.wishList, generateCards)
            mainHeader.textContent = `Список желаний`
        } else if (prop === 'cat' || prop === 'subcat'){
            getData.category(prop, value, generateCards)
            mainHeader.textContent = value
        }
    }
    
}

export default generateGoodsPage