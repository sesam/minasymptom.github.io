window.onload = () => {
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeDAggwyFWORIdobSCs3cDPZiycNTL1Wc8fWaDY1pWCDXqT4w/viewform?entry.1420904060="
  const btnOpenForm = document.querySelector('#btn-open-form');
  
  btnOpenForm.onclick = () => {
    handleOpenForm();
  }

  const handleOpenForm = () => {
    const id = generateUID();
    const uniqueUrl = FORM_URL + id;
    open(uniqueUrl);
  }

  // 6-character alphanumeric sequence
  const generateUID = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  }
}