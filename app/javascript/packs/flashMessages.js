import Toastfy from "toastify-js";

document.addEventListener('DOMContentLoaded', () => {
  const backgroundColor = {
    alert:  "#f44336",
    error:  "#f44336",
    notice: "#009688"
  }
  JSON.parse(document.body.dataset.flashMessages).forEach(flashMessage => {
    const [type, message] = flashMessage;

    Toastfy({
      text: message,
      duration: 3000,
      close:true,
      backgroundColor: backgroundColor[type],
      stopOnFocus: true
    }).showToast();
  });
});