class Alert {
  constructor(name, color, message) {
    this.name = name;
    this.color = color;
    this.message = message;
  }
  displayAlert(){
    const alertBody = document.createElement('div');
    alertBody.className = 'app-alert p2';
    alertBody.innerHTML = `<div class="inline-flex items-center bg-white leading-none text-${this.color}-600 rounded-full p-2 shadow text-teal text-sm">
    <span class="inline-flex bg-${this.color}-600 text-white rounded-full h-6 px-3 justify-center items-center">${this.name}</span>
    <span class="inline-flex px-2">${this.message}</span>
    </div>`;
    return alertBody;
  }
}

export {Alert};
