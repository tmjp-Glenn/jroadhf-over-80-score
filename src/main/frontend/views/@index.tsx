import React, { useEffect } from 'react';
import Home from './home/@index';
import '../i18n/i18n';
const Index = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <div className="flex justify-center   ">
      <Home />
    </div>
  );
};

export default Index;
