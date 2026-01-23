import Academy from './pages/Academy';
import Certificate from './pages/Certificate';
import FinalAssessment from './pages/FinalAssessment';
import Lesson from './pages/Lesson';
import Quiz from './pages/Quiz';
import Track from './pages/Track';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Academy": Academy,
    "Certificate": Certificate,
    "FinalAssessment": FinalAssessment,
    "Lesson": Lesson,
    "Quiz": Quiz,
    "Track": Track,
}

export const pagesConfig = {
    mainPage: "Academy",
    Pages: PAGES,
    Layout: __Layout,
};