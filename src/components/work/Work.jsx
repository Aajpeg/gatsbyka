import React from "react";
import "./Work.css";

import Project from "../../shared/projectCard/ProjectCard";
import GoButton from "../../shared/goButton/GoButton";

const Work = () => {
  const featuredProjects = [
    {
      title: "Guild Protocol",
      description: "Landing Page for a play to earn crypto DAO",
      github: "",
      live: "https://guildprotocol.io",
      stack: "NextJS + Typescript + GSAP",
      isPrivate: true,
    },

    {
      title: "Caketools",
      description: "Decentralised charting hub for the BSC Network.",
      github: "",
      live: "https://caketools.io/",
      stack: "Next JS + Typescript + Web3",
      isPrivate: true,
    },
  ];

  const projects = [
    {
      title: "Pickssssssssssssr",
      description: "Cussssssssssssssstom a11y Compliant Datepicker.",
      github: "https://github.com/kadetXx/pickr",
      live: "https://620e47ad1a4db5003a4d7f8d-zfxvyoulnf.chromatic.com/?path=/story/pickr--default",
      stack: "React + Storybook + TS",
      isPrivate: false,
    },

    {
      title: "Jobbox",
      description: "Landinssssssssg page for Job board.",
      github: "https://github.com/kadetXx/jobbox",
      live: "https://jobbox.vercel.app/",
      stack: "Next JS + Typessssscript + GSAP",
      isPrivate: false,
    },

    {
      title: "Klic",
      description:
        "Esports/VOD livestreaming platform with multiview experience.",
      github: "",
      live: "https://klic.gg/",
      stack: "NextJS + Typescript + AWS",
      isPrivate: true,
    },

    {
      title: "React Insect",
      description: "Customisable input & select dropdown component for react.",
      github: "https://github.com/kadetXx/insect",
      live: "https://www.npmjs.com/package/react-insect",
      stack: "React + Typescript",
      isPrivate: true,
      isPackage: true,
    },

    {
      title: "Birdbox",
      description: "Social application with real time Messaging.",
      github: "https://github.com/kadetXx/birdbox",
      live: "https://birdbox.vercel.app/",
      stack: "Vue + Web Sockets + Node JS",
      isPrivate: false,
    },

    {
      title: "BevelPlexus",
      description: "UI for a fintech application",
      github: "",
      live: "https://dev-bevelplexus.netlify.app/",
      stack: "React + Context API",
      isPrivate: true,
    },

    // {
    //   title: "Haute Couture",
    //   description: "Fashion landing page",
    //   github: "https://github.com/kadetXx/haute-couture",
    //   live: "http://haute-couture.vercel.app/",
    //   stack: "React + Typescript",
    //   isPrivate: false,
    // },

    // {
    //   title: "Playarone",
    //   description: "Esports gaming/staking platform",
    //   github: "",
    //   live: "https://app.playarone.com/",
    //   stack: "React + Typescript",
    //   isPrivate: true,
    // },

    // {
    //   title: "EndSars",
    //   description: "Web app to support the #EndSARS campaign",
    //   github: "https://github.com/kadetXx/endsars",
    //   live: "https://endsars.vercel.app/",
    //   stack: "React",
    //   isPrivate: false,
    // },

    // {
    //   title: "Seerbit Shop",
    //   description: "One page shop UI",
    //   github: "https://github.com/kadetXx/seerbit-css-test",
    //   live: "https://seerbitshop.vercel.app/",
    //   stack: "HTML + CSS",
    //   isPrivate: false,
    // },

    // {
    //   title: "Animepanda",
    //   description: "Mobile App landing page",
    //   github: "https://github.com/kadetXx/animepanda",
    //   live: "https://animepanda.herokuapp.com",
    //   stack: "Sass + Javsacript + PHP",
    //   isPrivate: false,
    // },

    // {
    //   title: "Vectorly",
    //   description: "Draw basic shapes with SVG",
    //   github: "https://github.com/kadetXx/vectorly",
    //   live: "https://seerbitshop.vercel.app/",
    //   stack: "React",
    //   isPrivate: false,
    // },

    // {
    //   title: "Shoppies",
    //   description: "Movie Awards Nomination App",
    //   github: "https://github.com/kadetXx/shoppies",
    //   live: "https://shoppiesawards.netlify.app/",
    //   stack: "React + SASS",
    //   isPrivate: false,
    // },

    // {
    //   title: "Checkmate",
    //   description: "Sign up portal for Checkmate Africa community",
    //   github: "https://github.com/kadetXx/checkmate",
    //   live: "https://checkmate.africa/",
    //   stack: "React + Styled Components",
    //   isPrivate: false,
    // },
  ];

  return (
    <div className="work">
      <div className="portfolio_showcase portfolio_showcase_full">
        <h3 className="title">FEATURED</h3>
        {featuredProjects.map((project, index) => (
          <Project key={index} {...project} id={index} fullWidth />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">OTHERS</h3>
        {projects.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <GoButton
        prev={{ url: "/", text: "Home" }}
        next={{ url: "/blog", text: "Articles" }}
      />
    </div>
  );
};

export default Work;
