function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    // constructor (props){
        //toujours ajouter le !!super!!
    //     super(props)
    //     console.log(props)
    // }

    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
    </div>
    }
}

class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null 
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render () {
        return <div>
            il est {this.state.date.toLocaleDateString()}  {this.state.date.toLocaleTimeString()}
        </div>
    }
}

function Home (){
    return <div>
        <Welcome name="jean"/>
        <Welcome name="pierre"/>
        <Clock/>
    </div>
}

ReactDOM.render(<Home/> , document.querySelector('#app'))