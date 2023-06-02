
let n = 0 


function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const title = 
    <h1>
        Bonjour les gens
        <span>{numberFormat(n)}</span>
    </h1>

ReactDOM.render(title, document.querySelector('#app'))
}


//syntax sans jsx
// function render() {
//     const title = React.createElement('h1', {},
//     'Bonjour tout le monde ',
//     React.createElement('span',{}, n))

// ReactDOM.render(title, document.querySelector('#app'))
// }

// function render() {
//     document.querySelector('#app').innerHTML = '<h1>Bonjour tout le monde <span>'+ n + '</h1>'
// }

render()

window.setInterval(() => {
    n++
    render()
},100)