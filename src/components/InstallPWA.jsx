import { useEffect, useState } from "react";

const InstallPWA = ({ className = "" }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const beforeInstallHandler = (e) => {
      e.preventDefault(); // prevent default banner
      setDeferredPrompt(e);
      setIsInstalled(false); // ensure button is enabled when installable
    };

    const installHandler = () => {
      setIsInstalled(true); // mark as installed when appinstalled fires
    };

    window.addEventListener("beforeinstallprompt", beforeInstallHandler);
    window.addEventListener("appinstalled", installHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
      window.removeEventListener("appinstalled", installHandler);
    };
  }, []);


  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === "accepted") {
        setDeferredPrompt(null);
        setIsInstalled(true);
      }
    } else {
      alert("This app is already installed or not installable.");
    }
  };

  return (
    <>
      {!isInstalled && deferredPrompt && (
        <button
          onClick={handleInstall}
          className={`bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium ${className}`}
        >
          Install App
        </button>
      )}
      {isInstalled && (
        <button
          disabled
          className={`bg-gray-400 cursor-not-allowed text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium ${className}`}
        >
          App Installed
        </button>
      )}
    </>
  );

};

export default InstallPWA;
