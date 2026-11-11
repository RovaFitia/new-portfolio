import { Routes, Route, Navigate } from "react-router-dom";

// Layouts et composants de gestion de langue
import LanguageLayout from "@/components/lang/LanguageLayout";

// Pages
import { LandingPage } from "@/pages/LandingPage";
import { MentionLegalePage } from "@/pages/MentionLegalePage";
import NotFoundPage from "@/pages/NotFoundPage";
import MainLayout from "@/components/layout/MainLayout";

function App() {
    return (
        <Routes>
            {/* Redirection automatique de la racine / vers /fr par défaut */}
            <Route path="/" element={<Navigate to="/fr" replace />} />

            {/* Groupe de routes préfixées par la langue (:lng = fr ou en) */}
            <Route path="/:lng" element={<LanguageLayout />}>
                {/* Routes avec Navbar et Footer */}
                <Route element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route
                        path="mention-legales"
                        element={<MentionLegalePage />}
                    />
                </Route>

                {/* Route autonome 404 (localisée sous /fr/* ou /en/*) */}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
