var React = require('react');



var About = (props) => {
  return(
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>
        This is my first attempt at a react app, and first attempt to be launched
      </p>
      <p>
        Here are some of the tools used:
      </p>
        <ul>
          <li>
            <a href='https://facebook.github.io/react'>React</a> - Javascript Framework
          </li>
          <li>
            <a href='https://openweathermap.org'>Open Weather Map</a> - Weather API used.
           </li>
           <li>
             <a href='http://github.com/bharris62'>My Github</a>  - Check source code here.
           </li>
        </ul>
    </div>
  )
};
module.exports = About;
