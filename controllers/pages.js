import path from "path";

const tasksPage = async (req, res) => {
  res.status(200).sendFile(path.resolve("static", "index.html"));
};

const loginPage = async (req, res) => {
  res.status(200).sendFile(path.resolve("static", "login.html"));
};

const homePage = async (req, res) => {
  res.status(200).sendFile(path.resolve("static", "home.html"));
};

export { tasksPage, loginPage, homePage };
