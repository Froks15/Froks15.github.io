var items = document.querySelectorAll('.item');
var readMore = document.querySelector('.read-more');
var popUp = document.querySelector('.popUp');
var popUpClose = document.querySelector('.popUpClose');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e) {
        tab(e);
    })
}

function tab(e) {
    if (e.target.classList.contains('active')) {
        return;
    }

    clearTabs(items);

    e.target.classList.add('active');

    var currentId = e.target.getAttribute('data-id');
    var contentItems = document.querySelectorAll('.content');
    for (let i = 0; i < contentItems.length; i++) {
        contentItems[i].classList.remove('active');
        if (contentItems[i].getAttribute('data-id') == currentId) {
            contentItems[i].classList.add('active');
        }
    }

    animationTabs(document.querySelector('.right .active img'), 'top');
    animationTabs(document.querySelector('.right .active h2'), 'left');
    animationTabs(document.querySelector('.right .active p'), 'right');
    animationTabs(document.querySelector('.right .read-more'), 'left');
    
}

function clearTabs(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
}

function animationTabs(item, direction) {
    item.classList.remove('move_' + direction);
    setTimeout(function() {
        item.classList.add('move_' + direction);
    }, 1);
}

readMore.addEventListener("click", function(e) {
    popUp.style.display = 'block';
})

popUpClose.addEventListener("click", function(e) {
    popUp.style.display = 'none';
})

