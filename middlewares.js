import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  // 이렇게 local에 있는건 템플릿에 변수명처럼 존재해서, 모든 템플릿에서 사용할 수 있음.
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  //   미들웨어가 next에 req를 전달해야함.
  next();
};
