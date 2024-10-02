async function wait(sec) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, sec);
  });
}

export { wait };
