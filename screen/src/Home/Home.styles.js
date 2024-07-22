import styled from "styled-components"

export const Wrapper = styled.div`

    .row {
        max-height: 33.33vh; 
    }

    .right-border {
        border-right: 0.5em solid #ebe7e1; 
    }

    .container {
        height: 99.5vh;
    }

    h1 {
        color: #192434;
        font-size: 2.5em;
        font-weight: 800;
        background-color: transparent;
    }

    h2 {
        color: #192434;
        font-size: 1em;
        font-weight: bold;
    }

    h3 {
        color: #192434;
        font-size: 1em;
        font-weight: 100;
        line-height: 1.5;
    }

    .text-ellipsis-13 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 14; /* Adjust the number of lines to show */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }

      .text-ellipsis-1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* Adjust the number of lines to show */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }
    
    .ydelser-og-tools{
        padding-left: 2vh;
        overflow: hidden;
    }

    .ydelser-og-tools-knap{
        border-radius: 1em;
        border: none;
        margin-right: 1em;
        margin-top: 1em;
        font-size: 1.25em;
    }

    .ydelser{
        color: #374B05;
        background-color: #eaf3ff;
    }


    .tools{
        color: #FF7201;
        background-color: #eaf3ff;
        margin-top: 10%;
    }

  
    .employeephoto {
        object-fit: cover;
        height: 7.5em;
        width: 7.5em;
        border-radius: 50%;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      display: none; /* Hide the default icons */
    }

    .carousel-indicators {
        margin: 0;
    }
    
    .carousel-indicators button {
        background-color: grey; /* Color of inactive indicators with some transparency */
        margin: 0; /* Space between line segments */
        border: none;
    }

    
    .carousel-indicators .active, .button {
        background: black; /* Color of the active indicator */
        width: 10em;
    }

`