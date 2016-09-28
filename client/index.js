import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.storeEntry = this.storeEntry.bind(this);
  }

  /* ------------------------------------ */
  /* ----      Data Acquisition      ---- */
  /* ------------------------------------ */
  componentWillMount() {
    // this.getData();
  }

  getData() {
    // $.get('http://localhost:3000/database')
    //   .done(data => this.setState({ entries: data }));
  }

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */
  storeEntry(newEntry) {
    this.setState({ entries: this.state.entries.concat([newEntry]) });
    console.log(this.state);
  }

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render() {
    return (
      <div>
        <h1>Starter</h1>
        <h3>Because all this setup takes too long!</h3>
        <SomeComponent
          storeEntry={this.storeEntry}
          entries={this.state.entries}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
