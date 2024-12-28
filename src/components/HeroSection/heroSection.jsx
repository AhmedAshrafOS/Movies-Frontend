import React from "react";

const HeroSection = () => {
  return (
    <div class="flex justify-between flex-col px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f5e58b] to-[#4b4b4b] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">Unlimited movies, TV shows, and more</h1>
          <p class="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">Starts at EGP 70. Cancel anytime.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
              <button
              className="btn btn-ghost bg-yellow-400 min-h-[3.6rem] rounded-[.35rem] font-semibold text-[1.1rem]  h-1 text-black hover:bg-black hover:text-yellow-300"  
              onClick={() => window.location.href = '/signup'}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div class=" h-[5vh] overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] " aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4b4b4b] to-[#f5e58b] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" ></div>
      </div>
  </div>
  );
};

export default HeroSection;
