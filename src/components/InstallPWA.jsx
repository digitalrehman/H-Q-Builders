import { useEffect, useState } from "react";

const InstallPWA = ({ className = "" }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const beforeInstallHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const installHandler = () => {
      setIsInstalled(true);
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
    <button
      onClick={handleInstall}
      disabled={isInstalled}
      className={`${
        isInstalled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700"
      } text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium ${className}`}
    >
      {isInstalled ? "App Installed" : "Install App"}
    </button>
  );
};

export default InstallPWA;
