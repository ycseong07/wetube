import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express(); // express를 실행한 결과를 app 상수로 만듦.

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter); //global router - /join, /login, /home ...
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; //이 파일을 부르면 app obj를 주겠다. 위의 app.~ 라고 적혀있는거
