var React = require('react');
var {Link} = require('react-router');


var Examples = (props) =>{
  return(
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p className='text-center'>Example Cities</p>
      <ol>
        <li>
          <Link to='/?location=Nashville'>Nashville, TN</Link>
        </li>
        <li>
          <Link to='/?location=Atlanta'>Atlanta, GA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
