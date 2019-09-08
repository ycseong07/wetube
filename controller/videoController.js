export const home = (req, res) => res.render("home", { pageTitle: "Home" });
// pageTitle이 home템플릿으로 전달됨. home템플릿은 layout/main을 extend하고 있으므로 main템플릿처럼 보임. 거기에 pageTItle 변수를 표시할 자리가 있으니까, 여기에 변수를 선언하면 home 템플릿에서만 작동하는 변수가 되는거임. 이런식으로 템플릿 각각에 변수를 선언할 수 있음.
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
