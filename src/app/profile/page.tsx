"use client";

import { useState, ChangeEvent } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add backend save logic here
    alert(`Profile saved:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-background)] text-[var(--color-foreground)] px-4">
      <form
        onSubmit={handleSave}
        className="bg-[var(--color-surface)] rounded-lg shadow-md p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-semibold mb-6">Your Profile</h2>

        <div className="mb-6 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--color-primary)] mb-4">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[var(--color-secondaryLight)] text-[var(--color-primaryDark)] font-bold text-4xl">
                {name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <label
            htmlFor="profileImage"
            className="cursor-pointer text-[var(--color-primary)] underline hover:text-[var(--color-primaryDark)]"
          >
            Change Profile Picture
          </label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <label htmlFor="name" className="block mb-2 font-medium">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <label htmlFor="email" className="block mb-2 font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-6 border border-[var(--color-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />

        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] text-white py-3 rounded-md hover:bg-[var(--color-primary-dark)] transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
