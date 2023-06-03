function Welcome ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

ReactDOM.render(<Welcome name="jean">Bonjour tout le monde </Welcome> , document.querySelector('#app'))