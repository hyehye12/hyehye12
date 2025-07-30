import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import GPTAnalysisPage from '../pages/GPTAnalysisPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/result/:emotion" element={<ResultPage />} />
        <Route path="/analysis/:diaryText" element={<GPTAnalysisPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 