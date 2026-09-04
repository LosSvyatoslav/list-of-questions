import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import QuestionSection from "../../pages/QuestionSection/QuestionSection";
import DetailedQuestion from "../../pages/DetailedQuestion/DetailedQuestion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/public-questions" replace /> },
      {
        path: "public-questions",
        element: <QuestionSection />,
      },
      {
        path: "public-questions/:questionId",
        element: <DetailedQuestion />,
      },
    ],
  },
]);
