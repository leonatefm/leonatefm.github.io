const timeout = (promise, time) => {
  let timer;
  return Promise.race([
    promise,
    new Promise((_r, rej) => (timer = setTimeout(rej, time))),
  ]).finally(() => clearTimeout(timer));
};

const youtubeUtils = {
  accessCheck: () => {
    const controller = new AbortController();
    const testRequest = fetch('https://www.youtube.com/', {
      mode: 'no-cors',
      signal: controller.signal,
    });
    timeout(testRequest, 3000)
      .then(() => {
        sessionStorage.setItem('youtubeAccess', true);
      })
      .catch(() => {
        sessionStorage.setItem('youtubeAccess', false);
        controller.abort();
      });
  },
  canAccess: () => {
    return sessionStorage.getItem('youtubeAccess') === 'true';
  },
};

export default youtubeUtils;
