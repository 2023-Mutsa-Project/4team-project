const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    './ActivityPage/index.html', //proxy가 필요한 path parameter
    createProxyMiddleware({
      target: 'http://localhost:3000/ActivityPage/index.html', //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
    })
  );
    /* app.use(
    '/api2', 
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  ); */
};