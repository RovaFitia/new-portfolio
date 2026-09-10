import { Routes, Route } from "react-router-dom";

// Pages
import { LandingPage } from "@/pages/LandingPage";
import { MentionLegalePage } from "@/pages/MentionLegalePage";
import NotFoundPage from "@/pages/NotFoundPage";
import MainLayout from "@/components/layout/MainLayout";

// Composant Layout réutilisable pour inclure Header & Footer


function App() {
    return (
        <Routes>
            {/* Routes avec Navbar et Footer */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/mention-legales"
                    element={<MentionLegalePage />}
                />
            </Route>

            {/* Route autonome (Sans Navbar ni Footer) */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
