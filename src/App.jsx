import { QuestionsProvider } from "./components/context/QuestionsProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuestionSection from "./components/QuestionSection/QuestionSection";

function App() {
  return (
    <>
      <Header />
      <QuestionsProvider>
        <QuestionSection />
      </QuestionsProvider>
      <Footer />
    </>
  );
}

export default App;
