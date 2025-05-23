import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-14 text-gray-800 dark:text-white">
        About Me
      </h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        {/* Image Placeholder Section */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 dark:border-gray-600">
            <Image
              src="/images/profile-placeholder.jpg" // Placeholder image path
              alt="Profile Picture Placeholder"
              layout="fill"
              objectFit="cover"
              className="bg-gray-200 dark:bg-gray-700" // Placeholder background if image fails to load
            />
            {/* You can add an actual placeholder SVG or similar if the image doesn't exist yet */}
            {/* For now, a background color will show if the image is missing */}
          </div>
        </div>

        {/* Text Content Section */}
        <div className="md:col-span-2 space-y-8 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800 dark:text-white">
              Introduction
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Hello! I&apos;m a dedicated .NET Developer with a passion for
              building efficient, scalable, and user-centric software
              solutions. I thrive on tackling complex challenges and
              transforming ideas into reality through code. My journey in tech
              has been driven by a relentless curiosity and a desire to make a
              tangible impact.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800 dark:text-white">
              My Journey
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              Over the past 8 years, I&apos;ve had the privilege of working on
              diverse projects, from enterprise-level applications to
              innovative API services. This journey has honed my skills in the
              full software development lifecycle and deepened my expertise in
              the .NET ecosystem and modern web technologies like Angular and
              React. Each project has been a learning opportunity, contributing
              to my growth as a versatile and results-oriented developer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800 dark:text-white">
              Philosophy & Approach
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              I believe in writing clean, maintainable code and fostering a
              collaborative environment where ideas can flourish. Continuous
              learning is at the core of my approach, allowing me to stay
              ahead of industry trends and deliver cutting-edge solutions. I am
              committed to quality, not just in the final product, but in every
              step of the development process, ensuring robust and reliable
              applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
