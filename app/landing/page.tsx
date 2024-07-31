'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/clerk-react';

const LandingPage = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const handleGetStartedClick = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/auth/sign-in');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900">
      <div className="text-center bg-white p-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-6xl font-extrabold mb-6 text-purple-700 tracking-wide">Welcome to AI Content Generator</h1>
        <p className="mb-10 text-lg text-gray-700 leading-relaxed">
          Generate amazing content with our AI-powered tool. Experience the power of artificial intelligence at your fingertips.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="px-10 py-4 bg-purple-600 text-white rounded-full font-semibold text-xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

