import "./App.css";
import Porfile from "./assets/Photo.jpeg";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";
import Resume from "./assets/resume.pdf"

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  const openLiveProject = () => {
    const liveProjectUrl = 'https://skin-protection-cream.vercel.app';
  
    // Open the live project URL in a new tab
    window.open(liveProjectUrl, '_blank');
  };
  const openLiveProjectshop = ()=>{
    const liveProjectUrl = 'https://dashboard-starter-theta.vercel.app/';

    // Navigate to the live project URL in the current tab
    window.open(liveProjectUrl, '_blank');

  }
  const openGithubRepository = () => {
    const liveProjectUrl = 'https://github.com/RBVikas3/Skin-Protection-Cream';

    window.open(liveProjectUrl, '_blank');
  };
  const openGithubRepositoryShop = () => {
    const liveProjectUrl = 'https://github.com/RBVikas3/Dashboard_Starter';

    window.open(liveProjectUrl, '_blank');
  };
  const handleDownloadResume = () => {
    // Use the public folder for the file path
    const resumeFilePath = Resume;

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute to the file path
    link.href = resumeFilePath;

    // Set the download attribute to specify the file name
    link.download = 'resume.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };
  const openLiveProjectGPT_3 = ()=>{
    const liveProjectUrl = 'https://gpt-3-jsm-lime.vercel.app/';

    window.open(liveProjectUrl, '_blank');

  }
  const openGithubRepositoryGPT_3 = ()=>{
    const liveProjectUrl = 'https://github.com/RBVikas3/GPT3_JSM';

    window.open(liveProjectUrl, '_blank');
    
  }
  const  openLiveProjectresWeb = ()=>{
    const liveProjectUrl = 'https://restaurant-website-opal-two.vercel.app/';

    window.open(liveProjectUrl, '_blank');
  }
  const openGithubRepositoryresWeb = ()=>{
    const liveProjectUrl = 'https://github.com/RBVikas3/Restaurant_website/';

    window.open(liveProjectUrl, '_blank');
  }
  const openLiveProjectZomoto_clone=()=>{
    const liveProjectUrl = 'https://zomoto-cone.vercel.app/';

    window.open(liveProjectUrl, '_blank');
  }
  const openGithubRepositoryZomoto_clone = ()=>{
    const liveProjectUrl = 'https://github.com/RBVikas3/Zomoto_Cone';

    window.open(liveProjectUrl, '_blank');

  }
  const openLiveProjectmovix = ()=>{
    const liveProjectUrl = 'https://movix-phi-woad.vercel.app/';

    window.open(liveProjectUrl, '_blank');
  }
  const openGithubRepositorymovix = ()=>{
    const liveProjectUrl = 'https://github.com/RBVikas3/Movix';

    window.open(liveProjectUrl, '_blank');
  }
  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Vikas Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Vikas,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                Highly motivated Front-end developer 1.2 years with a passion for crafting engaging UIs and backend architecture. Built  30 websites (personal + professional), proficient in React, Next.js, MongoDB, Node.js, jQuery, AWS, payment integrations (RezorPay, Stripe). </p>
                <button onClick={handleDownloadResume} className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  Download resume
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('../large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('../small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px] rounded-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 Shop Dashboard
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online store of Shop Dashboard. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex mt-12 gap-2">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700" onClick={openLiveProjectshop}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"onClick={openGithubRepositoryShop}>
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                SkinGuardian
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online store of SkinGuardian. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"  onClick={openLiveProject}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" onClick={openGithubRepository}>
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 GPT_3
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online store of GPT_3. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"  onClick={openLiveProjectGPT_3}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"  onClick={openGithubRepositoryGPT_3}>
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                Restaurant Website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online store of Restaurant Website. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex gap-2 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"  onClick={openLiveProjectresWeb}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500" onClick={openGithubRepositoryresWeb}>
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  Zomoto Clone
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online Zomoto Clone. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"  onClick={openLiveProjectZomoto_clone}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"  onClick={openGithubRepositoryZomoto_clone}>
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                 Movix
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Responsive React application for an online Movix. Built with HTML5, CSS3 (SCSS), and React.
                </p>
                <div className="flex gap-4 mt-12">
                  <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"  onClick={openLiveProjectmovix}>
                    Live preview
                  </button>
                  <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"  onClick={openGithubRepositorymovix}>
                    Checkout github
                  </button>
                </div>
              </div>
              
            </div>
           
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS, Sass , Bootstrap ,Tailwind CSS And Material UI </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
             
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React And Next JS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[100%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node js And MongoDB</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
             
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                REACTJS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                NEXTJS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                JAVASCRIPT
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                TYPESCRIPT
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                HTML5
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                CSS3
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
            
             
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                JQUERY
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                NODEJS
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                REDUX
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                MONGODB
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                GIT
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                  Graduated Ghousia College Of Engineering 
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022-2023</h3>
                <p>
                 I joined Liquid Lab as a frontend developer. I am thrilled to be a part of this dynamic team, where I can apply and enhance my skills in web development. 
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023-2024</h3>
                <p>
                 Now Currently Working as Front-end Developer @ Nexevo Technology.
                </p>
              </div>
             
            </div>
          </div>
        </section> */}
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
