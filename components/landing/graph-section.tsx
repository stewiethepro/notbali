import AnimatedFeatureCard from "@/components/features/animated-feature-card-5";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4">
          <AnimatedFeatureCard />
        </div>
      </div>
    </section>
  );
}
