import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-10 px-4 max-w-full mx-auto pt-5">
      <h1 className="text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide">
        VirtualR Build Tools
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <div className="flex justify-center my-8 flex-wrap gap-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white shadow hover:scale-105 transition"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-2 px-4 border rounded-md hover:bg-orange-600 hover:text-white transition"
        >
          Documentation
        </a>
      </div>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Build the future of immersive experiences. Whether you're a seasoned developer or just getting started, VirtualR provides powerful, intuitive tools designed to make VR creation accessible, creative, and limitless.
      </p>
      <div className="flex flex-wrap justify-center mt-10 gap-6 w-25xl">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-orange-700 shadow shadow-orange-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-orange-700 shadow shadow-orange-400"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <p className="mt-4 text-md text-center text-neutral-500 max-w-3xl">
        With built-in support for asset management, lighting, animation, and real-time collaboration, you’ll find everything you need to create truly immersive worlds—all in one platform.
      </p>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-6xl text-center">
        <div className="bg-white/3 backdrop-blur-sm shadow-sm p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">Visual Scripting</h3>
          <p className="text-gray-600">Design immersive interactions without writing a single line of code using our node-based visual scripting tool.</p>
        </div>
        <div className="bg-white/3 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">Real-Time Preview</h3>
          <p className="text-gray-600">Instantly preview your scenes and make live adjustments to environments and assets directly in VR.</p>
        </div>
        <div className="bg-white/3 backdrop-blur-lg shadow-lg p-6 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-2 text-orange-600">Cross-Platform Export</h3>
          <p className="text-gray-600">Deploy your projects effortlessly to major VR platforms like Oculus, SteamVR, and WebXR.</p>
        </div>
      </div>

      {/* New Content Section */}
      <div className="mt-16 max-w-5xl text-center px-4">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Why Choose VirtualR?</h2>
        <p className="text-neutral-500 mb-4">
          We're not just a tool—we're your creative partner. VirtualR is designed to streamline development, reduce technical barriers, and give you the freedom to experiment, prototype, and launch faster than ever before.
        </p>
        <ul className="text-neutral-500 list-disc text-left px-6 md:px-20 space-y-2">
          <li>Seamless integration with Unity and Unreal Engine workflows.</li>
          <li>Access to a growing asset library filled with 3D models, textures, and shaders.</li>
          <li>Built-in performance optimization and analytics tracking.</li>
          <li>Community templates and project sharing to jumpstart your builds.</li>
        </ul>
      </div>
      <div className="mt-16 max-w-5xl text-center px-4">
        <h2 className="text-3xl font-semibold text-orange-600 mb-4">Build What You Imagine</h2>
        <p className="text-neutral-500 mb-4">
          Imagine walking through a museum you designed, conducting virtual training for a global team, or building a multiplayer VR game with your friends—all from your laptop.
        </p>
        <p className="text-neutral-500 mb-4">
          With VirtualR, you’re not limited by code or complexity. You’re only limited by your imagination.
        </p>
      </div>

      <div className="mt-16 max-w-5xl text-center px-4">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Who is VirtualR For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-neutral-600">
          <div>
            <h3 className="font-bold text-lg mb-2">🎮 Indie Game Developers</h3>
            <p>Build rich, interactive environments and prototypes faster than ever.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">🏫 Educators & Trainers</h3>
            <p>Create virtual labs, simulations, and immersive classrooms in minutes.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">🎨 Designers & Creators</h3>
            <p>Transform static ideas into 3D interactive experiences with drag-and-drop tools.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-4xl text-center px-4">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">From Concept to Reality</h2>
        <p className="text-neutral-500 mb-4">
          Whether you’re brainstorming your next project or ready to publish, VirtualR supports your entire workflow—from idea to headset.
        </p>
        <p className="text-neutral-500">
          No gatekeeping. No steep learning curve. Just you and your vision—brought to life.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-10 max-w-3xl flex-wrap">
        <img
          src="https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU="
          alt="VR Headset"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Van0y9ZOXhlHQXCEfLAlGUxuzkSRb6lwHQ&s"
          alt="Immersive experience"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIwP8I8ZW0BimMgss3uLrZHnSKl4yz0Djiw&s"
          alt="Immersive experience"
          className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-md"
        />
      </div>


      <div className="mt-12 max-w-3xl text-center">
        <p className="text-neutral-500">
          Whether you're building VR games, training simulations, or architectural walkthroughs, <span className="text-orange-600 font-semibold">VirtualR</span> gives you the tools to bring your imagination to life.
        </p>
        <p className="text-neutral-500 mt-4">
          Join a growing community of developers who are shaping the future of immersive technology. Start today—your virtual world is waiting.
        </p>
      </div>
      <div className="backdrop-blur-md bg-white/1 border border-white/10 shadow-lg text-white py-12 mt-20 w-full text-center rounded-xl max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-semibold mb-4">What Will You Create?</h3>
        <p className="text-lg mb-6">The tools are in your hands. The next big experience is one click away.</p>
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition"
        >
          Get Started for Free
        </a>
      </div>

    </div>
  );
};

export default HeroSection;
