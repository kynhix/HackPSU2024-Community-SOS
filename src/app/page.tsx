"use client";

import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const supabase = createClient();

  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      return;
    }
    setLoggedIn(true);
  }

  useEffect(() => {
    fetchUser();
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="max-w-[1440px] max-h-[1024px] w-screen h-screen flex-col justify-start items-center gap-2.5 inline-flex"> <div className="self-stretch h-[318px] px-4 flex-col justify-start items-center gap-10 flex">
        <div className="text-center text-stone-800 text-5xl sm:text-6xl md:text-8xl font-bold leading-[88px]">Community <span className='text-red-900'>SOS</span></div>
        <div className="self-stretch text-stone-800 h-[142px] flex-col justify-start items-center gap-10 flex">
          <div className="self-stretch text-center text-neutral-900 text-3xl font-normal">See a need, lend a hand. Together, we make a difference!</div>
          <img src="/hero.png" />
          {isLoggedIn &&
            <Link href="/dashboard" className="px-12 py-6 bg-neutral-900 rounded-[36px] justify-start items-start gap-2.5 inline-flex text-neutral-50 transition-colors duration-300 hover:bg-amber-200 hover:text-amber-950">
              <div className="text-2xl font-medium leading-[18px]">Dashboard</div>
            </Link> ||
            <Link href="/login" className="px-12 py-6 bg-neutral-900 rounded-[36px] justify-start items-start gap-2.5 inline-flex text-neutral-50 transition-colors duration-300 hover:bg-amber-200 hover:text-amber-950">
              <div className="text-2xl font-medium leading-[18px]">Get Started</div>
            </Link>}
        </div>
      </div>
      </div>
    </main>
  );
}
