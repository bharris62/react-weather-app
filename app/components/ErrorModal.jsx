var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return(
      <div id='error-modal' className='reveal tiny text-center' data-reveal=''>
        <h4>ERROR</h4>
        <p>City Not Found</p>
        <p>
          <button className='button hollow' data-close=''>
            OKAY
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
