import { BorderBeam } from "@/components/magicui/border-beam";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

export default function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <section className="max-w-5xl mx-auto h-screen flex flex-col justify-center items-center px-7 lg:px-0 relative">
      <div className="relative rounded-2xl p-1 overflow-hidden mt-[8rem]">
        <BorderBeam />
        <HeroVideoDialog
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.veed.io/embed/d1a68648-f4ea-405b-b86e-52604b114d4e?watermark=0&color=default&sharing=1&title=0"
          thumbnailSrc="/queenstown.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
}
