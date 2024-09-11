import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { log } from "console";

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

interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <StarFilledIcon className="size-4 text-trackpurple-400" />
        <StarFilledIcon className="size-4 text-trackpurple-400" />
        <StarFilledIcon className="size-4 text-trackpurple-400" />
        <StarFilledIcon className="size-4 text-trackpurple-400" />
        <StarFilledIcon className="size-4 text-trackpurple-400" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <img
        src={img}
        className="h-10 w-10 rounded-full  ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Luke Amundson",
    role: "Head of Sales ANZ",
    img: "/luke-amundson.jpeg",
    description: (
      <p>
        Am I
        <Highlight>
          NotBali
        </Highlight>
        ?
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
  {
    name: "Tom Stevenson",
    role: "Survey Specialist",
    img: "/tom-stevenson.png",
    description: (
      <p>
        NotBali is 
        <Highlight>
          saving $42 every week
        </Highlight>{" "}
        by paying parking fines, not fees 🧠
      </p>
    ),
  },
  {
    name: "Dan Danilov",
    role: "Head of Strategy & Operations",
    img: "/dan-danilov.jpeg",
    description: (
      <p>
        NotBali was 
        <Highlight>
        not approved
        </Highlight>{" "}
        by the board.
      </p>
    ),
  },
  {
    name: "Keniel Yao",
    role: "Data Science Lead",
    img: "/keniel-yao.png",
    description: (
      <p>
        <Highlight>
        Bayesian posterior distributions 
        </Highlight>
        affirm a 95% credible interval for NotBali's superiority in enhancing subjective well-being.
      </p>
    ),
  },
  {
    name: "Emmie Hwang",
    role: "Community & Engagement Lead",
    img: "/emmie-hwang.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          so wildly millenial
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Connor Archbold",
    role: "Co-Founder & Co-CEO",
    img: "/connor-archbold.png",
    description: (
      <p>
        We should be
        <Highlight>
          doing NotBali in Bali
        </Highlight>, we're not thinking big enough.
      </p>
    ),
  },
  {
    name: "Madi Ostoja",
    role: "Senior Software Engineer",
    img: "/madi-ostoja.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          watching sportsball
        </Highlight> on a summer's eve
        .
      </p>
    ),
  },
  {
    name: "Jess Negus",
    role: "Senior Insights Analyst",
    img: "/jess-negus.png",
    description: (
      <p>
        NotBali is
        <Highlight>
          wholesome
        </Highlight>
        💜
      </p>
    ),
  },
  {
    name: "Matt Herbert",
    role: "Co-Founder & Co-CEO",
    img: "/matt-herbert.jpeg",
    description: (
      <p>
        I wanted to go to
        <Highlight>
          Bali
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Hamish Mathieson",
    role: "Head of Growth",
    img: "/hamish-mathieson.png",
    description: (
      <p>
        NotBali is an 
        <Highlight>
          insight in itself
        </Highlight>
        .
      </p>
    ),
  },
  {
    name: "Cap'n Caitlin Filmer",
    role: "Head of Customer",
    img: "/caitlin-filmer.jpeg",
    description: (
      <p>
        Arrr, NotBali be the
        <Highlight>
        finest treasure
        </Highlight>
        I've yet to discover! 
      </p>
    ),
  },
  {
    name: "Stuart Donald",
    role: "Head of Engineering",
    img: "/stuart-donald.jpeg",
    description: (
      <p>
        NotBali is 
        <Highlight>
          BRAT
        </Highlight>{" "}
        .
      </p>
    ),
  },
];

export default function SocialProofTestimonials() {
  return (
    <section id="testimonials">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TESTIMONIALS
          </h3>
          <div className="relative mt-6 max-h-[650px] overflow-hidden">
            <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
              {Array(Math.ceil(testimonials.length / 3))
                .fill(0)
                .map((_, i) => (
                  <Marquee
                    vertical
                    key={i}
                    className={cn({
                      "[--duration:60s]": i === 1,
                      "[--duration:30s]": i === 2,
                      "[--duration:70s]": i === 3,
                    })}
                  >
                    {testimonials.slice(i * 3, (i + 1) * 9).map((card, idx) => (
                      <TestimonialCard {...card} key={idx} />
                    ))}
                  </Marquee>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-white from-20% dark:from-black"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-white from-20% dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
