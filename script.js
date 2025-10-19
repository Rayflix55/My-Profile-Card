console.log("js connected");

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
setInterval(updateTime, 10); // Update every 10ms to show milliseconds smoothly
updateTime();