<main className="bg-secondaryDark text-primary py-8">
  <h1 id="about" className="text-center text-3xl lg:text-4xl my-8 text-text font-bold">
    About
  </h1>
  <div className="container grid grid-cols-2 gap-20">
    <div className="">
      <div id="content" className="md:col-span-1 col-span-2 sm:mt-10 md:mt-0 text-center md:text-left">
        <div className="flex items-center justify-start gap-10 mb-4">
          <img src={MeHead} alt="Martynas" className="w-14 rounded-[50%]" />
          <p className="py-5 leading-5 tracking-widest text-xl lg:text-2xl">About Me</p>
        </div>
        <h1 className="text-xl leading-6 lg:text-2xl text-text font-semibold">I am a person that keeps on delivering until it is fully done</h1>
        <p className="leading-5 py-5 lg:text-xl">
          I started nimbling in programming since I was quite young, I always enjoyed to learn new things and expering along the way. I am a capable in working in a team or do some individual work, that is not alien to me. Outside of the programming
          world, I really enjoy traveling, meeting my friends or just going out and listening to music. Without that I am sure I would not be sane by now.
        </p>
        {/* <button className="bg-text text-primary flex items-center rounded-md px-5 py-2 m-auto md:m-0 hover:scale-110 duration-200 transition">
              My story <FaArrowRight className="text-sm pt-[2px] ml-4" />
            </button> */}
      </div>
    </div>
    <div className="">
      <div id="content" className="md:col-span-1 col-span-2 sm:mt-10 md:mt-0 text-center md:text-left">
        <div className="flex items-center justify-start gap-10 mb-4">
          <img src={CodeHead} alt="Martynas" className="w-14 h-14 rounded-[50%]" />
          <p className="py-5 leading-5 tracking-widest text-xl lg:text-2xl">My Skills</p>
        </div>
        <div className="react">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2">
            React <FaReact />
          </label>
          <Progress value={60} variant="filled" color="amber" />
        </div>
        <div className="js">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2 mt-3">
            Javascript <FaJs />
          </label>
          <Progress value={70} variant="filled" color="light-green" />
        </div>
        <div className="HTML">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2 mt-3">
            HTML <FaHtml5 />
          </label>
          <Progress value={99} variant="filled" color="green" />
        </div>
        <div className="CSS">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2 mt-3">
            CSS <FaCss3Alt />
          </label>
          <Progress value={100} variant="filled" color="green" />
        </div>
        <div className="HTML">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2 mt-3">
            Tailwind <RiTailwindCssFill />
          </label>
          <Progress value={95} variant="filled" color="green" />
        </div>
        <div className="HTML">
          <label className="text-xl text-text font-semibold flex items-center gap-2 mb-2 mt-3">
            Node <FaNodeJs />
          </label>
          <Progress value={70} variant="filled" color="green" />
        </div>
      </div>
    </div>
  </div>
</main>;
