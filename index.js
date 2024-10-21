/* изначально все картинки узкие. нам нужно, чтобы при наведении
мышкой картинка расширялась. если выделить через querySelector,
то выледится только первый слайд, поэтому используем querySelectorAll */
const items = document.querySelectorAll('.item');
/* будут видны все слайды
console.log(items);  
чтобы картинка разъезжалась получаем доступ к каждому элементу: */
items.forEach(item => {
    /*
        item.addEventListener('mouseover', () => {
            проверяем. будет видно количество наведений:
            console.log('ckicked');
                создаем class, чтобы картинка менялась при наведении
                item.classList.add('selected');
                    и в css пишу, что хочу от этого class selected
                    removeFocus();
        })
                    removeFocus = () => {
                        items.forEach(item => {
                            item.classList.remove('selected');
            })
        } /* но в таком виде класс будет удаляться сразу у всех, поэтому
        эту функцию мы перепишем. нам нужно, чтобы эта функция была вызвана до того, как
        мы прикоснемся к другому элементу */
    item.addEventListener('mouseover', () => {
        removeFocus();
            item.classList.add('selected');
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        /* то есть мы удаляем класс с того элемента, который был выбран,
        а потом мы его добавляем на следующий выбранный элемент */
    })
}
})