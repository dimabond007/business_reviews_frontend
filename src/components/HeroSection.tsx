import { Buisness } from "@/types/types";

interface PropsTypes {
  business: Buisness | null;
}

function HeroSection({ business }: PropsTypes) {
  if (!business) return;
  return (
    <div className="relative">
      <div>
        <img
          src={`/src/images/${business.imageUrl}`}
          alt=""
          className="w-full"
        />
      </div>
      <div className="absolute top-0 left-0 content-center w-full h-full bg-black bg-opacity-50">
        <div className="flex flex-col text-center justify-center  text-accent-foreground ">
          <div className="text-5xl font-black">{business.name}</div>
          <div>{business.description}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
