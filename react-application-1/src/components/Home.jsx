import React from "react";
import "../styles/Home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>techstudio</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            temporibus eaque aperiam pariatur dicta. Aut nam eos ea illum saepe.
            Fugiat, adipisci, omnis deleniti iure mollitia amet vero repellendus
            doloremque laborum consequuntur velit odit temporibus illo ab vitae
            iusto quas id doloribus ipsum delectus, voluptatibus rem repellat!
            Delectus, labore similique expedita enim mollitia pariatur
            exercitationem eos voluptate, modi minima recusandae perspiciatis
            voluptas, reiciendis nesciunt esse sit nostrum est doloremque
            distinctio. Aspernatur dolore optio labore error adipisci. Quam
            aliquid sapiente, placeat debitis, earum ad doloremque quia maiores
            reprehenderit vitae praesentium laborum eveniet sed animi ut
            perferendis nisi assumenda fugit cumque? Doloribus!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div>
              <AiFillAmazonCircle style={{ animationDelay: "0.1s" }} />
              <p>Amazon</p>
            </div>

            <div>
              <AiFillGoogleCircle style={{ animationDelay: "1s" }} />
              <p>Google</p>
            </div>
            <div>
              <AiFillInstagram style={{ animationDelay: "0.5s" }} />
              <p>Instagram</p>
            </div>
            <div>
              <AiFillYoutube style={{ animationDelay: "1s" }} />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
