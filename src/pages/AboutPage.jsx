import { Link } from "react-router-dom";
import { Data } from "../data";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Nikola Tesla (1856-1943) was a Serbian-American inventor, electrical
        engineer, and futurist who made significant contributions to the
        development of modern electrical systems. Born in what is now Croatia,
        Tesla immigrated to the United States in the late 19th century and
        became a naturalized citizen.
      </p>
      <p>
        Tesla is best known for his pioneering work in alternating current (AC)
        electrical systems, which revolutionized the generation and distribution
        of electricity. His inventions and innovations include the induction
        motor and transformer, both essential components of AC power systems.
      </p>
      <p>
        Despite his numerous contributions, Tesla faced financial challenges and
        struggled to gain widespread recognition during his lifetime. He held
        numerous patents and conceptualized ideas that were ahead of his time,
        such as the concept of wireless communication and the development of the
        Tesla coil, which is still used in radio technology today.
      </p>
      <p>
        Nikola Tesla's legacy has grown over the years, and he is now celebrated
        as a visionary inventor and a key figure in the history of electrical
        engineering. His name is synonymous with innovation, and his ideas
        continue to inspire scientists, engineers, and enthusiasts around the
        world.
      </p>
      <h1>{Data.length} Things You Didn’t Know About Nikola Tesla</h1>
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/fact/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AboutPage;
