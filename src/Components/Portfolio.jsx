/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Deep-dive into APIs : Theoretical aspects",
    description:
      "Deep-dive into APIs : Theoretical aspects.",
    url: "https://mrsiddhartha.hashnode.dev/deep-dive-into-apis-theoretical-aspects",
  },
  {
    title: "HTTP, HTTPS, and APIs: Understanding the Relationship",
    description:
      "HTTP, HTTPS, and APIs: Understanding the Relationship.",
    url: "https://mrsiddhartha.hashnode.dev/http-https-and-apis-understanding-the-relationship",
  },
  {
    title: "Static Portfolio",
    description:
      "My static portfolio, includes all of my social links.",
    url: "https://bio.link/mrsiddhartha",
  },
  {
    title: "Mastering Git & GitHub: A GDSC Tech Session!",
    description:
      " Unleash the Power of Git & GitHub! Join us for an epic tech session with Siddhartha Rajbongshi, Cyber Security Lead at GDSC Gauhati University, and Roktim Kamal Senapoty, Author of GitNinja Handbook. Get ready to supercharge your version control skills!.",
    url: "https://www.youtube.com/watch?v=mkU3njbNuVo",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
