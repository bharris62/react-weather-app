var React = require('react');
var ReactDOM = require ('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

  getDefaultProps: function (){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.String,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){
    var {title, message} = this.props;
    var modalMarkup = (
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

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){


    return (
      <div></div>
    );

  }
});

module.exports = ErrorModal;
