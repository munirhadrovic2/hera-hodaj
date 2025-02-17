import React, { useState } from "react";
import { FaSpotify, FaYoutube, FaSoundcloud } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Modal from "./Modal"; // Import the modal component

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-darkGray bg-gradient-blur flex flex-col justify-between relative overflow-hidden py-12">
      {/* Background Blur and Gradient */}
      <div className="absolute inset-0 bg-gradient-blur blur-xl opacity-80"></div>

      {/* Top logo */}
      <div className="relative z-10 text-center">
        <img src="logo.png" alt="Top Logo" className="mx-auto mb-6 w-2/5" />
      </div>

      <div className="relative z-10 text-center flex-grow">
        {/* Main image with subtle shadow */}
        <div className="mb-12">
          <img
            src="cover.png"
            alt="Main Visual"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-lg shadow-xl"
          />
          <p className="mt-4 text-white text-2xl">Hera - Hodaj</p>
        </div>

        {/* DSP icons with full clickable buttons */}
        <div className="bg-transparent px-6 py-4 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="space-y-4">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/watch?v=VnWyyNcMP7s" // YouTube link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <FaYoutube size={40} className="text-youtube" />
                  <span className="ml-4 text-white text-lg">YouTube</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a>

            {/* YouTube Music */}
            <a
              href="https://music.youtube.com/watch?v=98b5vjBVypI&si=05RGcp08m66-sELq"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <FaYoutube size={40} className="text-youtube" />
                  <span className="ml-4 text-white text-lg">YouTube Music</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a>

            {/* Spotify */}
            <a
              href="https://open.spotify.com/album/2CK8ESi8fWwe8q621yFFZ9" // Spotify link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <FaSpotify size={40} className="text-spotify" />
                  <span className="ml-4 text-white text-lg">Spotify</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a>

            {/* SoundCloud */}
            <a
              href="https://soundcloud.com/hera69527/hodaj" // SoundCloud link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <FaSoundcloud size={40} className="text-soundcloud" />
                  <span className="ml-4 text-white text-lg">SoundCloud</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a>

            {/* Apple Music */}
            <a
              href="https://music.apple.com/us/album/hodaj-single/1794136789" // Apple Music link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <FaSpotify size={40} className="text-white" />
                  <span className="ml-4 text-white text-lg">Apple Music</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a>

            {/* Deezer */}
            {/* <a
              href="https://www.deezer.com" // Deezer link
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-center justify-between bg-gray-800 rounded-md p-3 shadow-lg">
                <div className="flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Deezer_logo_without_text.png"
                    alt="Deezer"
                    className="h-10 w-auto"
                  />
                  <span className="ml-4 text-white text-lg">Deezer</span>
                </div>
                <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700">
                  Play
                </button>
              </div>
            </a> */}
          </div>

          {/* Cookie Consent and Footer Section */}
          <div className="mt-6 text-sm text-gray-400">
            <p>
              You have accepted the use of cookies for this service.{" "}
              <button
                onClick={openModal}
                className="underline hover:text-white focus:outline-none"
              >
                Click here
              </button>{" "}
              to manage your permissions.
            </p>
            <p className="mt-2">This page may contain affiliate links.</p>
            <p className="mt-4">
              Created with{" "}
              <a
                href="https://www.tempodigital.org"
                className="underline hover:text-white"
              >
                TempoDigital
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom logo */}
      <div className="relative z-10 text-center mt-6">
        <img src="logo.png" alt="Bottom Logo" className="mx-auto w-2/5" />
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold mb-4">Manage Permissions</h2>
        <p className="text-gray-700 mb-4">
          You can manage your cookie permissions here. Please select your
          preferences below.
        </p>
        <div className="space-y-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Allow tracking cookies
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Allow marketing cookies
          </label>
        </div>
        <button
          onClick={closeModal}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Preferences
        </button>
      </Modal>
    </div>
  );
};

export default IndexPage;
