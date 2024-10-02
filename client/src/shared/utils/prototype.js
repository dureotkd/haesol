HTMLElement.prototype.submitEvent = function () {
  this.dispatchEvent(
    new Event("submit", {
      cancelable: true, // 이벤트를 제어할 수 있게됌 (event.preventDefault() 등)
      bubbles: true, // 폼 안에서 발생한 이벤트가 폼의 부모 요소까지 전파됩니다.
    }),
  );
};
