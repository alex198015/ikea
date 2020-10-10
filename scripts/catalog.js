export const catalog = () => {

    const btnBurger = document.querySelector('.btn-burger')
    const catalog = document.querySelector('.catalog')
    const btnClose = document.querySelector('.btn-close')
    const catalogList = document.querySelector('.catalog-list')
    const subcatalog = document.querySelector('.subcatalog')
    const subcatalogHeader = document.querySelector('.subcatalog-header')
    const btnReturn = document.querySelector('.btn-return')



    const overlay = document.createElement('div')
    overlay.classList.add('overlay')
    document.body.insertAdjacentElement('beforeend', overlay)

    const openMenu = () => {
        catalog.classList.add('open')
        overlay.classList.add('active')

    }

    const closeMenu = () => {
        catalog.classList.remove('open')
        overlay.classList.remove('active')
        closeSubMenu()
    }

    const openSubMenu = (event) => {
        event.preventDefault()
        const target = event.target
        const itemList = target.closest('.catalog-list__item')
        if (itemList) {
            subcatalogHeader.innerHTML = itemList.innerHTML
            subcatalog.classList.add('subopen')
        }
    }

    const closeSubMenu = () => {
        subcatalog.classList.remove('subopen')
    }

    btnBurger.addEventListener('click', openMenu)
    btnClose.addEventListener('click', closeMenu)
    overlay.addEventListener('click', closeMenu)
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu()

        }
    })

    catalogList.addEventListener('click', openSubMenu)
    btnReturn.addEventListener('click', closeSubMenu)
}