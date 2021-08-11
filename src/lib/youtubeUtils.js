const youtubeUtils = {
  accessCheck: () => {
    let image = new Image();
    image.onload = function () {
      sessionStorage.setItem('youtubeAccess', true);
    };
    image.onerror = function () {
      sessionStorage.setItem('youtubeAccess', false);
    };
    image.src = 'http://youtube.com/favicon.ico';
  },
  canAccess: () => {
    return sessionStorage.getItem('youtubeAccess') === 'true';
  },
};

export default youtubeUtils;
