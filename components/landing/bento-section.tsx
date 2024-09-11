import BentoDemo from "../example/bento-demo";

export default function BentoSection() {
  return (
    <section
      id="bento"
      className="mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4">
          <BentoDemo />
        </div>
      </div>
    </section>
  );
}
