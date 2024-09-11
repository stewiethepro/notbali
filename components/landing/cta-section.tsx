import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { ChevronRight, HeartHandshake } from "lucide-react";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-cyan-600/20 p-1 py-0.5 font-bold text-cyan-600 dark:bg-trackpurple-600/20 dark:text-trackpurple-600",
        className,
      )}
    >
      {children}
    </span>
  );
};

const reviews = [
  {
    name: "Connor Archbold",
    username: "@connor",
    body: (
      <p>
        We should be
        <Highlight>
          doing NotBali in Bali
        </Highlight>, we're not thinking big enough.
      </p>
    ),
    img: "/connor-archbold.png",
  },
  {
    name: "Keniel Yao",
    username: "@keniel",
    body: (
      <p>
        <Highlight>
        Bayesian posterior distributions 
        </Highlight>
        affirm a 95% credible interval for NotBali's superiority in enhancing subjective well-being.
      </p>
    ),
    img: "/keniel-yao.png",
  },
  {
    name: "Stuart Donald",
    username: "@stuart",
    body: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
    img: "/stuart-donald.jpeg",
  },
  {
    name: "Tom Stevenson",
    username: "@tom",
    body: (
      <p>
        NotBali is 
        <Highlight>
          saving $42 every week
        </Highlight>{" "}
        by paying parking fines, not fees 🧠
      </p>
    ),
    img: "/tom-stevenson.png",
  },
  {
    name: "Dan Danilov",
    username: "@dan",
    body: (
      <p>
        NotBali was 
        <Highlight>
        not approved
        </Highlight>{" "}
        by the board.
      </p>
    ),
    img: "/dan-danilov.jpeg",
  },
  {
    name: "Emmie Hwang",
    username: "@emmie",
    body: (
      <p>
        NotBali is 
        <Highlight>
          so wildly millenial.
        </Highlight>
      </p>
    ),
    img: "/emmie-hwang.jpeg",
  },
  {
    name: "Luke Amundson",
    username: "@luke",
    body: (
      <p>
        Am I
        <Highlight>
          NotBali
        </Highlight>
        ?
      </p>
    ),
    img: "/luke-amundson.jpeg",
  },
  {
    name: "Madi Ostoja",
    username: "@madi",
    body: (
      <p>
        NotBali is 
        <Highlight>
          watching sportsball
        </Highlight> on a summer's eve.
      </p>
    ),
    img: "/madi-ostoja.jpeg",
  },
  {
    name: "Jess Negus",
    username: "@jess",
    body: (
      <p>
        NotBali is
        <Highlight>
          wholesome
        </Highlight>
        💜
      </p>
    ),
    img: "/jess-negus.png",
  },
  {
    name: "Matt Herbert",
    username: "@matt",
    body: (
      <p>
        I wanted to go to
        <Highlight>
          Bali
        </Highlight>
        .
      </p>
    ),
    img: "/matt-herbert.jpeg",
  },
  {
    name: "Lauren Smyth",
    username: "@lauren",
    body: (
      <p>
        NotBali is not
        <Highlight>
        aligned with our brand identity
        </Highlight>
        .
      </p>
    ),
    img: "/lauren-smyth.jpeg",
  },
  {
    name: "Hamish Mathieson",
    username: "@hamish",
    body: (
      <p>
        NotBali is an 
        <Highlight>
          insight in itself
        </Highlight>
        .
      </p>
    ),
    img: "/hamish-mathieson.png",
  },
  {
    name: "Cap'n Caitlin Filmer",
    username: "@caitlin",
    body: (
      <p>
        Arrr, NotBali be the
        <Highlight>
        finest treasure
        </Highlight>
        I've yet to discover! 
      </p>
    ),
    img: "/caitlin-filmer.jpeg",
  },
  {
    name: "Barry",
    username: "@barry",
    body: (
      <p>
        I was told there would be a
        <Highlight>
          NotBali photoshoot
        </Highlight>.
      </p>
    ),
    img: "/barry.png",
  },
  {
    name: "Woody",
    username: "@woody",
    body: (
      <p> 
        <Highlight>
          woof
        </Highlight>
      </p>
    ),
    img: "/woody.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: React.ReactNode;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-[2rem] border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function CallToAction() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="container flex w-full flex-col items-center justify-center p-4">
          <div className="relative flex w-full max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border p-10 py-14">
            <div className="absolute rotate-[35deg]">
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee pauseOnHover className="[--duration:20s]" repeat={3}>
                {firstRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:20s]"
                repeat={3}
              >
                {secondRow.map((review) => (
                  <ReviewCard key={review.username} {...review} />
                ))}
              </Marquee>
            </div>
            <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
              <img
                    className="mx-auto size-16 text-black dark:text-white lg:size-24"
                    src="/notbali-logo.png"
                    alt="Notbali Logo"
              /> 
              {/* <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24" /> */}
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
              <h1 className="text-3xl font-bold lg:text-4xl">
                NotBali awaits.
              </h1>
              <p className="mt-2">
                Come on in, the water's not warm 🏖️
              </p>
              <a
                className={cn(
                  buttonVariants({
                    size: "lg",
                    variant: "outline",
                  }),
                  "group mt-4 rounded-[2rem] px-6",
                )}
                href="https://tracksuitworkspace.slack.com/archives/C07M16TBXCK"
                target="_blank"
              >
                Join the fun
                <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
              </a>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
          </div>
        </div>
      </div>
    </section>
  );
}
