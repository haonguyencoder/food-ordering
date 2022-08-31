import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium mb-8">About Us</h2>
          <p className="text-lg">
            Pizza Shop is the largest and most loved pizza
            restaurant chain in the world. Pizza Shop is proud to
            be present in 150 different countries starting from May 2015.
            <br></br>
            <br></br>
            This marks a prominent milestone to demonstrate the brand’s commitment to
            deliver customers around the world the highest-quality pizza &
            professional service. Pizza Shop Vietnam was established in 2004 with
            100% foreign investment and has developed over 110 restaurants with
            more than 3.000 employees.
            <br></br>
            <br></br>
            Pizza Shop Vietnam - where you can be the best version of yourself from personal development to career opportunity!
            <br></br>
            <br></br>
            We dedicate a friendly and professional working environment to each employee in attempts to live up to our core value: “Together we make Pizza Shop GREAT!”
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
