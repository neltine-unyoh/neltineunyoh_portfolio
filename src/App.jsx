import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Kora from "./pages/Kora/Kora";
import AgriLock from "./pages/AgriLock/AgriLock";
import QuizGenie from "./pages/QuizGenie/QuizGenie";
import WhatsApp from "./pages/WhatsApp/WhatsApp";
import MoMo from "./pages/MoMo/MoMo";
import HowIThink from "./pages/HowIThink/HowIThink";
import Teardown from "./pages/Teardown/Teardown";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function OldTeardownLink() {
  const { slug } = useParams();
  return <Navigate to={`/teardowns/${slug}`} replace />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/kora" element={<Kora />} />
        <Route path="/work/agrilock" element={<AgriLock />} />
        <Route path="/work/quizgenie" element={<QuizGenie />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/teardowns" element={<HowIThink />} />
        <Route path="/teardowns/whatsapp" element={<WhatsApp />} />
        <Route path="/teardowns/mtn-momo" element={<MoMo />} />
        <Route path="/teardowns/:slug" element={<Teardown />} />
        {/* Old addresses keep working */}
        <Route path="/how-i-think" element={<Navigate to="/teardowns" replace />} />
        <Route path="/how-i-think/:slug" element={<OldTeardownLink />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
