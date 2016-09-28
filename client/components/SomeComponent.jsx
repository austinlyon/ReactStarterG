const React = require('react');

const SomeComponent = React.createClass({

  /* ------------------------------------ */
  /* ----      Data Acquisition      ---- */
  /* ------------------------------------ */
  getInitialState: function() {
    return {
      inputVal: '',
    };
  },

  /* ------------------------------------ */
  /* ----       Event Handlers       ---- */
  /* ------------------------------------ */
  handleInputChange: function(e) {
    this.setState({inputVal: e.target.value});
  },

  storeEntry: function(e, reactId) {
    e.preventDefault();

    // Prepare entry for storage
    let inputVal = this.state.inputVal;

    this.props.storeEntry(inputVal);
    this.setState({
      inputVal: '',
    });
  },

  /* ------------------------------------ */
  /* ----           Render           ---- */
  /* ------------------------------------ */
  render: function() {
    return (
      <div id='entryFormContainer' className='entryFormContainer'>
        <form id='entryForm' name='entryForm' onSubmit={this.storeEntry}>
          <input
            type="text"
            value={this.state.inputVal}
            placeholder="New Contact"
            onChange={this.handleInputChange}
            className="inputVal" name="inputVal"
          />
          <input type='submit' name='submitEntry' value='Submit' />
        </form>
      </div>
    );
  }

});

module.exports = SomeComponent;
