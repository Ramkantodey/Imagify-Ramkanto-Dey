import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [credit, setCredit] = useState(0);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (data.success) {
                setCredit(data.credits); // save credit
                setUser(data.user);      // save user info (like name)
            } else {
                setUser(null);
                setCredit(0);
            }
        } catch (error) {
            toast.error(error.message);
            setUser(null);
            setCredit(0);
        }
    };

    const generateImage = async (prompt) => {

        if (credit === 0) {
            toast.error('No Credit Balance')
            navigate('/buy');
        }

        try {
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditsData();

            }
        } catch (error) {
            toast.error(error.message || "Image generation failed.");
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setUser(null);
        setCredit(0);
        navigate('/');
    };

    useEffect(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
