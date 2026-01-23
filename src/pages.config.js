import Academy from './pages/Academy';
import Track from './pages/Track';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import FinalAssessment from './pages/FinalAssessment';
import Certificate from './pages/Certificate';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Academy": Academy,
    "Track": Track,
    "Lesson": Lesson,
    "Quiz": Quiz,
    "FinalAssessment": FinalAssessment,
    "Certificate": Certificate,
}

export const pagesConfig = {
    mainPage: "Academy",
    Pages: PAGES,
    Layout: __Layout,
};