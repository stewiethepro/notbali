import Marquee from "@/components/magicui/marquee";

const companies = [
  "US",
  "GB",
  "CA",
  "CN",
  "FR",
  "CG",
  "HN",
  "IN",
  "IT",
  "MX",
  "NZ",
  "DE",
  "PK",
  "WS",
  "SA",
  "ZA",
  "TR",
];

export default function Companies() {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            DESTINATIONS THAT ARE NOTBALI
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${logo}.svg`}
                  // className="h-10 w-28 dark:brightness-0 dark:invert"
                  className="h-10 w-28 dark:brightness-10"
                  alt={logo}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
