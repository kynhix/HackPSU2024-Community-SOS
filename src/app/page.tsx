import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-[1440px] max-h-[1024px] w-screen h-screen bg-hero-bg flex-col justify-start items-center gap-2.5 inline-flex"> <div className="self-stretch h-[318px] p-6 flex-col justify-start items-center gap-10 flex">
        <div className="w-[756px] text-center text-white text-[103px] font-bold font-['Lato'] leading-[88px]">Community SOS</div>
        <div className="self-stretch h-[142px] flex-col justify-start items-center gap-10 flex">
          <div className="self-stretch text-center text-white text-3xl font-normal font-['Lato']">See a need, lend a hand. Together, we make a difference!</div>
          <button className="px-12 py-6 bg-white rounded-[36px] justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-800 text-2xl font-medium font-['Lato'] leading-[18px]">Offer Help</div>
          </button>
        </div>
      </div>
      </div>
    </main>
  );
}
