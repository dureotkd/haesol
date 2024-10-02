function openCenterPopup(url, title, w, h) {
  // Calculate the position of the popup to center it
  const dualScreenLeft =
    window.screenLeft !== undefined
      ? window.screenLeft
      : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined
      ? window.screenTop
      : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const left = width / 2 - w / 2 + dualScreenLeft;
  const top = height / 2 - h / 2 + dualScreenTop;

  const newWindow = window.open(
    url,
    title,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`,
  );

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

export { openCenterPopup };
