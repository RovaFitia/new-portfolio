import { Outlet } from "react-router-dom";
import Navbar from "@/components/navigation/navbar/Navbar";
import Footer from "@/components/navigation/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
