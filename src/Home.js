import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">

    <h2 className="muted statement">I Build</h2>
    <h3 className="muted illustration">
      <Link className="frontends"
            to='/faves?{"faveList":[2,4,5,6,8],"title":"Some frontend projects from my portfolio: "}'
            title='Some frontend projects from my portfolio'
            onMouseOver={ () =>  document.getElementById('earsUp').beginElement()  }
            onMouseOut={ () =>  document.getElementById('earsUp').endElement()  }
          >

        <svg version="1.1" id="Layer_2" x="0px" y="0px"
             width="120px" height="250px" viewBox="0 0 150 250" enableBackground="new 0 0 120 250">

          <path id="frontEndCat"
              d="
              M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198 c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142  c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954 c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6 c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-18.359-26.46-12.958-26.951 c16.574-1.504,22.958,9.746,26.864,10.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-1.006-26.533-0.443-26.697 c3.874-1.128,18.876,1.493,18.889,24.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79 s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359 c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95 c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729 s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59 s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z
              ">
              <animate
                  id="earsUp"
                  attributeName="d"
                  values="
            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-18.359-26.46-12.958-26.951
		c16.574-1.504,22.958,9.746,26.864,10.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-1.006-26.533-0.443-26.697
		c3.874-1.128,18.876,1.493,18.889,24.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z;

            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-12.359-31.46-6.958-31.951
		c16.574-1.504,16.958,14.746,20.864,15.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-5.006-24.533-4.443-24.697
		c3.874-1.128,22.876-0.507,22.889,22.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z;

            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z;


            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-3.793-8.305-8.944-7.018c-3.495,0.874-4.957,6.986-4.957,6.986
		s1.459,6.634,6.012,6.735C94.731,65.417,97.09,58.593,97.09,58.593z M118.225,49.992c2.127-4.026-2.195-8.761-2.195-8.761
		s-5.368-0.727-7.831,1.901c-3.632,3.874-0.173,10.26-0.173,10.26S115.639,54.884,118.225,49.992z;

            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-3.793-8.305-8.944-7.018c-3.495,0.874-4.957,6.986-4.957,6.986
		s1.459,6.634,6.012,6.735C94.731,65.417,97.09,58.593,97.09,58.593z M118.225,49.992c2.127-4.026-2.195-8.761-2.195-8.761
		s-5.368-0.727-7.831,1.901c-3.632,3.874-0.173,10.26-0.173,10.26S115.639,54.884,118.225,49.992z"
                  keyTimes="0; 0.25; 0.65; 0.9; 1"
                  /*calcMode="spline"
                  keySplines="0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1"*/
                  dur="0.3s"
                  fill="freeze"
                  repeatCount="1"
                  begin="indefinite"
                  />
              <animate
                  id="earsDown"
                  attributeName="d"
                  values="
                  M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-3.793-8.305-8.944-7.018c-3.495,0.874-4.957,6.986-4.957,6.986
		s1.459,6.634,6.012,6.735C94.731,65.417,97.09,58.593,97.09,58.593z M118.225,49.992c2.127-4.026-2.195-8.761-2.195-8.761
		s-5.368-0.727-7.831,1.901c-3.632,3.874-0.173,10.26-0.173,10.26S115.639,54.884,118.225,49.992z;

		M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-3.793-8.305-8.944-7.018c-3.495,0.874-4.957,6.986-4.957,6.986
		s1.459,6.634,6.012,6.735C94.731,65.417,97.09,58.593,97.09,58.593z M118.225,49.992c2.127-4.026-2.195-8.761-2.195-8.761
		s-5.368-0.727-7.831,1.901c-3.632,3.874-0.173,10.26-0.173,10.26S115.639,54.884,118.225,49.992z;

		M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-6.982-36.991-1.958-34.951
		c10.95,4.446,11.958,17.746,15.864,18.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-8.006-21.533-7.443-21.697
		c3.874-1.128,25.876-3.507,25.889,19.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z;

		M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-12.359-31.46-6.958-31.951
		c16.574-1.504,16.958,14.746,20.864,15.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-5.006-24.533-4.443-24.697
		c3.874-1.128,22.876-0.507,22.889,22.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z;

            M87.023,232.771c-1.055,6.207-2.635,7.336-12.643,6.771s-21.286,7.712-28.134,3.198
		c-6.848-4.515-8.315-9.332-12.002-11.589c-3.688-2.258-14.226-10.326-19.408-20.387c-7.267-14.106-10.157-25.957-6.207-45.142
		c5.126-24.9,6.771-64.891,14.671-73.354c6.737-7.219-2.257,58.684-7.9,75.047c-6.081,17.637,15.821,60.111,12.79,44.954
		c-2.257-11.285-9.028-18.621-6.395-38.558c2.273-17.21,16.767-37.995,26.774-50.973c10.009-12.979,13.503-19.488,28.971-31.6
		c8.041-6.295,4.631-6.959,0-10.721c-6.139-4.989-9.166-19.2-8.112-23.834c-7.481-6.959-18.359-26.46-12.958-26.951
		c16.574-1.504,22.958,9.746,26.864,10.157c2.022,0.213,21.729-10.388,19.902-9.028c-3.997,2.977-1.006-26.533-0.443-26.697
		c3.874-1.128,18.876,1.493,18.889,24.804c2.913,5.079,17.528,16.16,15.035,34.621c-1.168,8.642-0.45,15.79-0.45,15.79
		s6.606,18.021,7.643,33.864c1.01,15.424-1.072,43.224-17.69,57.467c-18.433,15.8-12.334,36.202-9.173,46.359
		c3.161,10.156,10.677,9.028,6.918,15.799c-3.757,6.771-9.066,5.644-12.186,5.079c-4.78,3.95-0.565,0.564-4.78,3.95
		c-4.214,3.386-9.817,3.197-15.611-1.316 M97.09,58.593c0,0-2.76-7.048-7.911-5.761c-3.495,0.874-5.99,5.729-5.99,5.729
		s1.579,5.112,6.132,5.213C94.852,63.895,97.09,58.593,97.09,58.593z M117.414,48.82c2.127-4.026-1.385-7.59-1.385-7.59
		s-5.062,0.589-7.524,3.217c-3.632,3.874-0.479,8.944-0.479,8.944S114.828,53.713,117.414,48.82z
            "
                  keyTimes="0; 0.25; 0.65; 0.9; 1"
                  /*calcMode="spline"
                  keySplines="0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1"*/
                  dur="0.3s"
                  fill="freeze"
                  repeatCount="1"
                  begin="indefinite"
                  />
          </path>
        </svg>

        <span className="text">Frontends</span>

      </Link>

      &nbsp; &amp; &nbsp;

      <Link
          className="backends"
          to='/faves?{"faveList":[3,11,12],"title":"Some backend projects from my portfolio: "}'
          title='Some backend projects from my portfolio'
          onMouseOver={ () =>  document.getElementById('curlTail').beginElement()  }
          onMouseOut={ () =>  document.getElementById('curlTail').endElement()  }
          >

        <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="120px"
            height="300px"
            viewBox="0 0 150 300"
            enableBackground="new 0 0 120 300" >

          <path id="backEndCat"
              d="M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,1.59,20.246-2.206,33.804c-3.311,11.821-21.151,22.236-33.083,26.032c-8.015,2.55-15.184,8.782,1.085,8.135
		c9.483-0.378,29.878-11.562,38.506-21.693c12.066-14.169,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265">

          <animate
              id="curlTail"
              attributeName="d"
              values="
            M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,1.59,20.246-2.206,33.804c-3.311,11.821-21.151,22.236-33.083,26.032c-8.015,2.55-15.184,8.782,1.085,8.135
		c9.483-0.378,29.878-11.562,38.506-21.693c12.066-14.169,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265;

            M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,3.929,21.132-2.206,33.804c-5.657,11.687-10.088,17.699-33.083,17.032c-8.015-0.232-15.071,6.117,1.085,8.135
		c11.151,1.393,29.878-2.562,38.506-12.693c12.066-14.169,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265;

            M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,2.819,20.652-2.206,33.804c-4.708,12.319-19.972,14.638-27.461,11.389c-7.356-3.191-17.587-0.942-4.537,6.778
		c8.303,4.912,27.923,7.76,38.506-5.693c11.507-14.627,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265;


            M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,3.929,21.132-2.206,33.804c-5.657,11.687-10.088,17.699-33.083,17.032c-8.015-0.232-15.071,6.117,1.085,8.135
		c11.151,1.393,29.878-2.562,38.506-12.693c12.066-14.169,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265;

            M82.722,228.832c9.618-0.542,20.459,7.412,27.04,3.074c6.582-4.339-0.506,0,3.038-2.169
		c3.543-2.17,1.59,20.246-2.206,33.804c-3.311,11.821-21.151,22.236-33.083,26.032c-8.015,2.55-15.184,8.782,1.085,8.135
		c9.483-0.378,29.878-11.562,38.506-21.693c12.066-14.169,5.988-50.378,11.931-63.994c4.971-11.389,6.761-27.297,4.229-46.459
		c-2.184-16.54-16.113-36.517-25.732-48.99c-9.62-12.474-12.979-18.73-27.846-30.37c-7.728-6.05-4.45-6.688,0-10.305
		c5.901-4.794,8.81-18.452,7.797-22.907c7.19-6.688,17.646-25.431,12.454-25.902c-15.929-1.446-22.065,9.366-25.82,9.762
		c-1.942,0.205-20.882-9.984-19.127-8.677c3.841,2.861,0.967-25.501,0.426-25.658C51.689,1.43,37.271,3.949,37.258,26.354
		c-2.8,4.881-16.846,15.531-14.45,33.274c1.122,8.306,0.433,15.176,0.433,15.176s-6.35,17.32-7.347,32.547
		c-0.969,14.825,1.031,41.542,17.003,55.232c17.716,15.186,11.854,34.794,8.816,44.557c-3.038,9.762-10.262,8.678-6.649,15.185
		c3.612,6.508,8.714,5.425,11.712,4.881c4.594,3.797,0.544,0.544,4.594,3.797c4.05,3.254,9.436,3.073,15.005-1.265"
              keyTimes="0; 0.25; 0.5; 0.65; 1"
              /*calcMode="spline"
              keySplines="0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1; 0.42 0 1 1"*/
              dur="1s"
              fill="freeze"
              repeatCount="indefinite"
              begin="indefinite"
               />
              </path>
        </svg>
        <span className="text">Backends</span>
      </Link>

      .</h3>

    <h1 className="muted tagLine">I am a
      &nbsp;
      <Link
          className="someFunWithHover"
          to='/projects'
          title=''
          onMouseOver={ () =>  {
                document.getElementById('earsUp').beginElement();
                document.getElementById('curlTail').beginElement();
              }
          }
          onMouseOut={ () =>  {
                document.getElementById('earsUp').endElement();
                document.getElementById('curlTail').endElement();
              }
          }
          >
        <span className="fullStack">Full Stack</span>
      </Link>
      &nbsp;
      Web Developer.
    </h1>
  </div>
);

export default Home;
