const menuSidbarItemList = document.querySelectorAll('.menu-sidebar__item')
menuSidbarItemList.forEach(item => {
    item.addEventListener('click', () => {
        menuSidbarItemList.forEach(item => {
            item.classList.remove('menu-sidebar__item_active')
        });

        item.classList.toggle('menu-sidebar__item_active')
    })
});

const createPostArea = document.querySelector('.send-massege__textarea')
const clearPostText = () => {
    createPostArea.textContent = ''
    createPostArea.removeEventListener('click', clearPostText)
}
createPostArea.addEventListener('click', clearPostText)

document.querySelectorAll('.post').forEach(post => {
    const likesCount = post.querySelector('.likes-count__text')
    const likeButton = post.querySelector('.js-like-button')
    const svg = likeButton.querySelector('use')

    if (likeButton.classList.contains('like-active')) {
        svg.setAttribute('xlink:href', svg.getAttribute('xlink:href').replace('like', 'likeFull'))
    }

    const likeCounter = operator => {
        let value = Number(likesCount.textContent.trim())

        if (operator === 'plus') {
            value++
        } else if (operator === 'minus') {
            value--
        }

        likesCount.textContent = value
    }

    const likeToggle = () => {
        const svgUrl = svg.getAttribute('xlink:href')

        if (likeButton.classList.contains('like-active')) {
            svg.setAttribute('xlink:href', svgUrl.replace('like', 'likeFull'))
            likeCounter('plus')
        } else {
            svg.setAttribute('xlink:href', svgUrl.replace('likeFull', 'like'))
            likeCounter('minus')
        }
    }

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('like-active')
        likeToggle()
    })
})

const burgerButton = document.querySelector('.burger-button')
const menu = document.querySelector('.menu-sidebar')
burgerButton.addEventListener('click', (event) => {
    menu.classList.toggle('hide')
})
const notification = document.querySelector('.notification')

const headerNavigationList = document.querySelector('.header-navigation__list')

const navigation = document.querySelector('.header-navigation')
const footer = document.querySelector('.footer')

const resizeWindow = () => {
    if(document.documentElement.clientWidth <= 660) {
        footer.append(notification)
        menu.classList.add('hide')
        headerNavigationList.classList.add('hide')
        
        burgerButton.classList.remove('hide')

    } else {
        navigation.append(notification)
        headerNavigationList.classList.remove('hide')

        menu.classList.remove('hide')
        burgerButton.classList.add('hide')

    }
}
resizeWindow()
window.addEventListener('resize', resizeWindow) 
