import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">

    <h3 className="statement">I build </h3>
    <h3 className="illustration">
      <Link className="frontends"
            to='/faves?{"faveList":[2,4,5,6,8],"title":"Some frontend projects from my portfolio: "}'
            title='Some frontend projects from my portfolio' >

        <svg version="1.1" id="Layer_2" x="0px" y="0px"
             width="150px" height="250px" viewBox="0 0 150 250" enableBackground="new 0 0 150 250">
          <path id="frontEndCat" />
        </svg>

        <span className="text">frontends</span>

      </Link>

      &nbsp; and &nbsp;

      <Link
          className="backends"
          to='/faves?{"faveList":[3,11,12],"title":"Some backend projects from my portfolio: "}'
          title='Some backend projects from my portfolio' >

        <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="150px"
            height="300px"
            viewBox="0 0 150 300"
            enableBackground="new 0 0 150 300" >

          <path id="backEndCat"  />
        </svg>
        <span className="text">backends</span>
      </Link>

      .</h3>

    <h2 className="tagLine">I am a
      &nbsp;
      <Link className="someFunWithHover" to='/projects' title=''>
        <span className="twoCat">two-cat</span>
        &nbsp;
        <span className="fullStack">full-stack</span>
      </Link>
      &nbsp;
      web developer.
    </h2>
  </div>
);

export default Home;
