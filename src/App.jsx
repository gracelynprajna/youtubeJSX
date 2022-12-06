import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// let num = 10;

// num > 10 ? console.log("Greater than 10") : console.log("Less than or equal to 10");

// const isNumGreaterthan10 = num > 10 ? num - 10 : num;

function ConditionalComponent(props){
  return (
    <div>
      {props.showComponent1 ? 
        <div>Component 1</div>
      :
        <div>Component 2</div>
      }
    </div>
  )
}

function YoutubeComponent(props){
  return(
    <div className="container">
      <img src={props.thumbnailImg}/>
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.videoUploader}</p>
        <p>{props.dateVideoUploaded}</p>
        <p>{props.videoViews}</p>
      </div>
    </div>
  )
}

let sampleData = [
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "He did WHAT?!?! (My intial reaction)",
    videoUploader: "MaxTongster",
    dateVideoUploaded: "10-31-2022",
    videoViews: 10
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
    videoUploader: "Dave Doughbrick",
    dateVideoUploaded: "11-02-2022",
    videoViews: 300000
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "React in 100 seconds",
    videoUploader: "Fireship",
    dateVideoUploaded: "2022-09-08",
    videoViews: 255
  }
];


function App() {
  return (
    <div className='app-container'>
      {
        sampleData.map(element=>{
          return  <YoutubeComponent
           thumbnailImg={element.thumbnailImg} 
           videoTitle={element.videoTitle}
           videoUploader={element.videoUploader}
           dateVideoUploaded={element.dateVideoUploaded}
           videoViews={element.videoViews}
           />
        })
      }
      <YoutubeComponent/>
      <YoutubeComponent/>
      <YoutubeComponent/>
    </div>
  )
}

export default App
