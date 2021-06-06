import axios from 'axios';

const API_BASE = 'http://localhost:8000'

export const sendAudio = async (blob, setResponse, setShowModal, setResults) => {
  var fd = new FormData();
  fd.append("audio_data",blob);
  // request.open("POST", "http://localhost/uploadAudio", true);
  // request.send(fd);
  axios({
    url: `${API_BASE}/dejavu/`,
    method: 'POST',
    data: fd,
  }).then((response) => {
    setResponse({ recordState: "finish",results: response.data })
    setResults(response.data["results"])
    setShowModal(true)
    return response.data;
  }).catch((error) => {
    return {};
  })

}
export const sendAudioVC = async (blob, setResponse, setShowModal, setResults) => {
  var fd = new FormData();
  fd.append("audio_data",blob);
  // request.open("POST", "http://localhost/uploadAudio", true);
  // request.send(fd);
  axios({
    url: `${API_BASE}/dejavu/melganvc`,
    method: 'POST',
    data: fd,
  }).then((response) => {
    setResponse({ recordState: "finish",results: response.data })
    setResults(response.data)
    setShowModal(true)
    return response.data;
  }).catch((error) => {
    return {};
  })

}