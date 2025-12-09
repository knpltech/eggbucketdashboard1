import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import egg from "../assets/egg.png";

export default function SignIn() {
  return (
    <div className="min-h-screen bg-eggBg flex flex-col items-center justify-center px-4 relative overflow-hidden">

      {/* FALLING EGGS */}
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={egg}
          className="egg-fall"
          style={{
            left: `${Math.random() * 90}vw`,
            animationDuration: `${6 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: "35px",
            opacity: 0.8
          }}
        />
      ))}
      {/* CARD */}
      <div className="bg-eggWhite w-full max-w-sm p-8 rounded-2xl shadow-xl relative z-10">

        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="w-30 h-12" />
          <h1 className="text-xl font-semibold mt-2">Egg Bucket</h1>
        </div>

        <h2 className="text-center text-2xl font-semibold mb-6">Sign In</h2>

        <div className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-3 rounded-xl bg-eggInput outline-none shadow" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-xl bg-eggInput outline-none shadow" />

          <button className="w-full bg-eggOrange text-white py-3 rounded-full mt-2 hover:opacity-90 shadow-md">
            Sign In
          </button>

          <p className="text-center text-sm mt-2 underline cursor-pointer">
            Forgot password?
          </p>

          <p className="text-center mt-4">
            New here?{" "}
            <Link to="/signup" className="font-semibold">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
