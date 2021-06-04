import { useState, useEffect } from 'react';
import './ListenButton.css';
import ListenImg from '../listen.png';
import MicImg from '../mic.png';
import SuccessImg from '../success.png';
import MicRecorder from 'mic-recorder-to-mp3';
import LoadingGif from '../loading.gif';
import { sendAudio } from './hooks';

import React from "react";

const IDLE_STATE = "idle";
const RECORD_STATE = "record";
const FINISH_STATE = "finish";
const FINDING_STATE = "finding";
const SEND_STATE = "send";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class ListenButton extends React.Component {
  constructor(props) {
    super(props);
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.state = {
      isRecording: false,
      recordState: IDLE_STATE,
      blob: "",
      blobUrl: "",
      isBlocked: false,
      results: "",
    };
  }
  startRecording = () => {
    if (this.state.isBlocked) {
      console.log("Please give permission for the microphone to record audio.");
    } else {
      Mp3Recorder.start()
        .then(() => {
          this.setState({ isRecording: true, recordState: RECORD_STATE });
        })
        .catch(e => console.error(e));
    }
  };
  sendRecording = () => {
    sendAudio(this.state.blob, this.setState.bind(this), this.props.setShowModal, this.props.setResults);
  }
  stopRecording = () => {
    this.setState({ isRecording: false });
    Mp3Recorder.stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        const blobUrl = URL.createObjectURL(blob)
        this.setState({
          blob: blob,
          blobUrl: blobUrl,
          isRecording: false,
        });
      })
      .catch(e => console.log(e));
  };
  checkPermissionForAudio = () => {
    if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
    }
    if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function(constraints) {
        // First get ahold of the legacy getUserMedia, if present
        var getUserMedia =
          // navigator.getUserMedia ||
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // Some browsers just don't implement it - return a rejected promise with an error
        // to keep a consistent interface
        if (!getUserMedia) {
          return Promise.reject(
            new Error("getUserMedia is not implemented in this browser")
          );
        }

        // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
        return new Promise(function(resolve, reject) {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(stream => {
        this.setState({ isBlocked: false });
      })
      .catch(err => {
        this.setState({ isBlocked: true });
        console.log("Please give permission for the microphone to record audio.");
        console.log(err.name + ": " + err.message);
      });
  };
  currentImg = () => {
    switch(this.state.recordState){
      case IDLE_STATE:
        return MicImg;
        break;
      case RECORD_STATE:
        return ListenImg;
        break;
      case FINISH_STATE:
        return SuccessImg;
        break;
      case FINDING_STATE:
        return LoadingGif;
        break;
      }
  }

  resetRecording = () => {
    this.setState({
      isRecording: false,
      recordState: IDLE_STATE,
      blob: "",
      blobUrl: "",
      isBlocked: false,
      results: "",
    })
  }

  onClick = () => {
    console.log('presses')
    if (this.state.recordState === IDLE_STATE) {
      this.setState({recordState:RECORD_STATE});
      this.startRecording();
    }
    else if (this.state.recordState === RECORD_STATE) {
      this.setState({recordState:SEND_STATE});
      this.stopRecording();
    }
    else if (this.state.recordState === SEND_STATE) {
      this.setState({recordState:FINDING_STATE});
      this.sendRecording();
    }
    else if (this.state.recordState === FINISH_STATE) {
      this.setState({recordState:IDLE_STATE});
    }
  }
  componentDidMount() {
    this.checkPermissionForAudio();
  }

  render() {
    const { recordState } = this.state;
    return (
      <div className="listen-button">
        <div className={`button ${recordState === IDLE_STATE ? "" : "ripple"}`}
          onClick={this.onClick}
          style={{animationDelay: "0s"}}>
          {recordState === SEND_STATE ? <div className="logo-text">SEND AUDIO</div> :
            <img src={this.currentImg()} alt="listen" className="logo"/>
          }
        </div>
        <audio
          ref="audioSource"
          controls="controls"
          src={this.state.blobUrl || ""}
        />
        <div className="button-wrapper">
          <div className="mode" onClick={this.resetRecording}>
            <span style={{fontSize: "20px"}}>Reset</span>
          </div>
        </div>
      </div>
    )
    // <div class="wrapper">
    //   <div class="outer">
    //     <div class="ripple three"></div>
    //     <div class="ripple two"></div>
    //     <div class="ripple one"></div>
    //   </div>
    // </div>
  }
}

export default ListenButton;
