import HelperTemplate from "@/components/layout/HelperTemplate";
import Image from "next/image";
import { timeline } from "../samples/timeline";
import Time from "@/components/layout/home/Time";

export default function Home() {
  return (
    <div>
      <div className="h-[75vh] bg-cyan-500 gap-4 flex justify-center items-center">
        <div className="flex gap-x-10 items-center">
          <div className="grid gap-4">
            <div className="flex gap-x-4">
              <div className="w-60 h-80 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  fill
                  alt="banner"
                  src="/home/banner.jpg"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="w-60 h-80 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  fill
                  alt="banner"
                  src="/home/banner.jpg"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="w-full h-80 relative overflow-hidden rounded-lg shadow-lg">
              <Image
                fill
                alt="banner"
                src="/home/banner.jpg"
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div>
            <h1 className="text-7xl font-bold text-cyan-900">
              Get all the history
            </h1>
          </div>
        </div>
      </div>
      <HelperTemplate>
        <div className="h-[50vh] flex gap-x-10 justify-center items-center">
          <div className="w-1/3 h-1 bg-cyan-900 rounded-full" />
          <p className="text-center w-1/2 text-cyan-900 font-medium">
            The Maldives is an island nation located in the Indian Ocean,
            southwest of India and Sri Lanka. The history of the Maldives dates
            back over 2,000 years, with early settlements by fishermen and
            Buddhist missionaries. In the 12th century, Islam was introduced to
            the Maldives and quickly became the dominant religion. The Maldives
            became a sultanate in the 16th century, with a rich tradition of
            maritime trade and commerce. In the 19th century, the Maldives
            became a British protectorate, before gaining independence in 1965.
            Today, the Maldives is a popular tourist destination known for its
            stunning beaches, clear waters, and coral reefs.
          </p>
          <div className="w-1/3 h-1 bg-cyan-900 rounded-full" />
        </div>
      </HelperTemplate>
      <div className="bg-cyan-500 py-20 space-y-10">
        <h2 className="text-5xl font-semibold text-cyan-800 text-center">
          Timeline of Maldives
        </h2>
        <div className="flex flex-col items-center">
          {timeline.map((time, index) => (
            <Time
              key={`time-${index}`}
              {...time}
              isEven={index % 2 == 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
