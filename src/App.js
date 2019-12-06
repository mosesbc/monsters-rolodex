import React,{Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      monsters:[],
      searchField:''
    }
  }

  handleChange = e => {
    this.setState({searchField:e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsteres = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsteres} />
      </div>
    )
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    //.then(response=> console.log(response.json()))
    .then(response=> response.json())
    //.then(users=> console.log(users))
    .then(users=> this.setState({monsters:users}))
  }

}
  

export default App;
