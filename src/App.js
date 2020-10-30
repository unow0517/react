import './App.css';
import { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/content";
import Subject from "./components/subject";
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

class App extends Component {
  constructor(props){ //initialize props 
    super(props);
    this.state = {
      mode: 'read',
      subject: {title:'WEB', sub: 'World Wide Web'},
      welcome: {title:'Welcome', desc: 'Hello React'},
      
      contents:[
        {id:1, title:'HTML', desc:'HTML is..asdasdasd'},
        {id:2, title:'CSS', desc:'CSS is..asdasd'},
        {id:3, title:'JavaScript', desc:'JS is..asdasd'}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'Welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode ==='read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;

    }
    return (
      <div className="App">
        <Subject 
        title= {this.state.subject.title} 
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode: 'Welcome'});
        }.bind(this)}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  };
}



export default App;
