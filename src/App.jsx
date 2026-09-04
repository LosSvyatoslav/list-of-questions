import { RouterProvider } from "react-router-dom";
// import { QuestionsProvider } from "./components/context/QuestionsProvider";
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import QuestionSection from "./components/QuestionSection/QuestionSection";
import { router } from "./components/router/router";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
      {/* <Header />
      <QuestionsProvider>
        <QuestionSection />
      </QuestionsProvider>
      <Footer /> */}
    </>
  );
}

export default App;
