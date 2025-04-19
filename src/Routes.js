import { HashRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import { HomeLanding } from './Pages/HomeLanding';
import Research from './Pages/Research';
import Frontpage from './Pages/Frontpage';
import React, { useState, useEffect } from 'react';  
import IntegrationsPage from './Pages/IntegrationPages/OutsidePredictions';
 
const MobileWarning = () => {  
    return (  
        <div className="mobile-warning">  
            <p>This website does not support mobile or tablet view due to security concerns. Please open it on a laptop or desktop.</p>  
            <p>सुरक्षा चिंताओं के कारण यह वेबसाइट मोबाइल या टैबलेट व्यू का समर्थन नहीं करती है। कृपया इसे लैपटॉप या डेस्कटॉप पर खोलें।</p>
        </div>  
    );  
};  
export const RoutesFunc = () => {
 
    const [isExiting, setIsExiting] = useState(false);  
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);  
  
    useEffect(() => {  
        const checkMobileOrTablet = () => {  
            setIsMobileOrTablet(window.innerWidth <= 1024); // Adjust the threshold as needed  
        };  
  
        checkMobileOrTablet();  
        window.addEventListener('resize', checkMobileOrTablet);  
  
        return () => {  
            window.removeEventListener('resize', checkMobileOrTablet);  
        };  
    }, []);  
    if (isMobileOrTablet) {  
        return <MobileWarning />;  
    }  
    return (
        <HashRouter>
            {/* <Header /> */}
            <Routes>
            <Route path="/" element={<Frontpage />} />
                <Route path="/home" element={<HomeLanding />} />
                <Route path="/r&d" element={<Research />} />
                <Route path="/integrations" element={<IntegrationsPage />} />
            </Routes>
        </HashRouter>
    );
}