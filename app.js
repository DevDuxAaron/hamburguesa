document.addEventListener("DOMContentLoaded",() => {
    const hamburguer = document.getElementById('hamburguer')
    const breadTopBtn = document.getElementById('bread-top')
    const breadBottomBtn = document.getElementById('bread-bottom')
    const tomatoBtn = document.getElementById('tomato')
    const lettuceBtn = document.getElementById('lettuce')
    const meatBtn = document.getElementById('meat')
    const cheeseBtn = document.getElementById('cheese')
    const removeBtn = document.getElementById('remove')

    let stack = []

    function add(name){
        return (() => {
            const newPiece = document.createElement('div')
            newPiece.classList.add(name)
            stack.unshift(newPiece)
            render()
        })
    }
    function remove() {
        const elem = stack.shift()
        hamburguer.removeChild(elem)
    }
    function render() {
        hamburguer.append(...stack)
    }
    function run() {
        const addBreadTop = add('bread-top')
        const addBreadBottom = add('bread-bottom')
        const addTomato = add('tomato')
        const addMeat = add('meat')
        const addLettuce = add('lettuce')
        const addCheese = add('cheese')

        breadTopBtn.addEventListener('click',addBreadTop)
        breadBottomBtn.addEventListener('click',addBreadBottom)
        tomatoBtn.addEventListener('click',addTomato)
        lettuceBtn.addEventListener('click',addLettuce)
        meatBtn.addEventListener('click',addMeat)
        cheeseBtn.addEventListener('click',addCheese)
        removeBtn.addEventListener('click',remove)
    }
    run()
})