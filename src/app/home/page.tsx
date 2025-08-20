"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, LogOut, Image as ImageIcon, Search } from "lucide-react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // ✅ Protect Home Page (redirect to login if not logged in)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, [router]);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
  };

  // Open file selector
  const openFileSelector = () => {
    fileInputRef.current?.click();
  };

  // Handle file selection
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Simulate plant identification
  const handleIdentifyPlant = () => {
    if (!selectedImage) {
      alert("Please select an image first");
      return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      alert("Plant identified successfully! (Demo)");
      // TODO: Redirect to results page or show modal
    }, 3000);
  };

  const resetSelection = () => {
    setSelectedImage(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-600 text-white flex flex-col items-center px-6 py-6">
      {/* ✅ Top Navbar */}
      <nav className="w-full flex justify-between items-center mb-8 px-4">
        <h1 className="text-2xl font-bold tracking-wide flex items-center gap-2">
          🌿 MedBotanica
        </h1>
        <div className="flex gap-4">
          {/* Profile */}
          <button
            onClick={() => router.push("/profile")}
            className="bg-green-700 hover:bg-green-800 transition rounded-full w-10 h-10 flex items-center justify-center"
            title="Profile"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition rounded-full w-10 h-10 flex items-center justify-center"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Header */}
      <header className="text-center mb-10">
        <p className="text-sm opacity-90">
          AI-Powered Herbal Plant Identification
        </p>
      </header>

      {/* Image Upload Section */}
      <section className="bg-white rounded-3xl p-6 max-w-lg w-full text-green-900 shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-1">Upload Plant Image</h2>
        <p className="mb-6 text-green-700">
          Take a clear photo or select from your device
        </p>

        <div className="mb-6 rounded-xl border-4 border-green-200 bg-green-50 relative h-72 flex justify-center items-center overflow-hidden">
          {selectedImage ? (
            <>
              <img
                src={selectedImage}
                alt="Selected Plant"
                className="object-cover w-full h-full rounded-xl"
              />
              <button
                aria-label="Remove selected image"
                onClick={resetSelection}
                className="absolute top-3 right-3 bg-green-900 text-white rounded-full w-9 h-9 flex justify-center items-center text-xl font-bold hover:bg-green-800 transition"
              >
                ×
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center opacity-60 select-none">
              <ImageIcon className="w-16 h-16 mb-3" />
              <p>No image selected</p>
              <p className="text-sm mt-1">Choose an option below</p>
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onFileChange}
          hidden
        />

        <div className="flex gap-6">
          <button
            onClick={openFileSelector}
            className="flex-1 bg-green-700 hover:bg-green-800 transition rounded-xl py-3 flex justify-center items-center gap-3 text-white font-semibold"
          >
            <ImageIcon className="w-5 h-5" /> Gallery
          </button>
        </div>
      </section>

      {/* Analyze Section */}
      <section className="max-w-lg w-full mb-12">
        <button
          onClick={handleIdentifyPlant}
          disabled={!selectedImage || isAnalyzing}
          className={`w-full rounded-3xl py-4 font-bold text-lg transition
            ${
              selectedImage && !isAnalyzing
                ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }
            text-white flex justify-center items-center gap-3`}
        >
          {isAnalyzing ? (
            <>
              <Search className="w-5 h-5 animate-spin" /> Analyzing Plant...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" /> Identify Plant
            </>
          )}
        </button>
      </section>

      {/* Features Info */}
      <section className="max-w-lg w-full bg-white rounded-3xl p-6 text-green-900 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">What you'll get:</h3>
        <ul className="space-y-3">
          {[
            ["🏷️", "Plant identification with scientific name"],
            ["💊", "Medicinal properties and uses"],
            ["⚠️", "Safety information and warnings"],
            ["📚", "Historical and cultural significance"],
          ].map(([icon, text]) => (
            <li key={text} className="flex items-center gap-3">
              <span className="text-2xl">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
