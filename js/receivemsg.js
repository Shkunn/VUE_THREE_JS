const socket = new WebSocket("ws://192.168.1.71:8080");

socket.onopen = () => {
  console.log("Hello!");
};

socket.onmessage = (data) => {
  console.log(data);
};