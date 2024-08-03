'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-white shadow w-full">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Image src="/logo.svg" alt="logo" width={150} height={50} />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to AI Content Generator
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Generate high-quality content with the power of AI.
        </p>
        <Link href="/sign-in">
          <Button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </Button>
        </Link>
      </main>
      <footer className="bg-white w-full py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          © 2024 AI Content Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
