import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = ({pageData}) => {
  const {PageName, Data} = pageData;
  return (
    <div>
      <Helmet>
        <title>{Data.title}</title>
        <meta name="description" content={Data.Description} />
      </Helmet>
      <h1>{PageName}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default About
