import { url } from "inspector";

const Testimonial = () => {
  return (
    <div className="flex gap-10 px-20 py-48 justify-center items-center">
      <div className="flex flex-col gap-4 w-[40%]">
        <h3 className="text-green font-bold text-2xl tracking-[0.3em]">TESTIMONIALS</h3>
        <h1 className="text-6xl font-bold leading-[1.3em] tracking-wide">Our community loves Edufy</h1>
        <p className="text-xl text-dark font-semibold">
          In recent times, there has been a notable shift as people increasingly
          embrace and prioritize education of their children.
        </p>
        <div className="flex gap-1 items-center">
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <img src="/star-icon.png" alt="star icon" />
          <p className="font-bold">4.9/5</p>
          <p>(4500+ Reviews)</p>
        </div>
      </div>

      <div className="flex z-0">
        <img src="" alt="card texture" className="bg-orange rounded-[100px] w-[34rem] h-[44rem] z-10 relative"/>

        <div className="z-20 absolute justify-center items-center px-10" style={{backgroundImage: url()}}>
          <h2>"Edufy Helped me a lot in deciding where I want to send my kids to school. It's worth a try!"</h2>
          <div>
            <img src="/avatar-card.png" alt="avatar" />
            <div>
              <h4>Ameila Brown</h4>
              <h5>Single Mother</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
