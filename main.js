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

  const threeChars = () => {
    var n = (Math.random() * 46656) | 0;
    return ("000" + n.toString(36)).slice(-3);
  }

  // 6-character alphanumeric sequence
  const generateUID = () => {
    return threeChars() + threeChars() + threeChars();
  }
}
