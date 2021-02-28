import Home from './Home';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  
  return (
    <div>
      <Helmet>
        <title>
          Kyle Johnson Web Development Portfolio
        </title>
        <keywords>
          Kyle Johnson Web Development Portfolio, web site development, skateboarder, tall, father, design, conent, build website, orlando, user testing, ux ui, front end development,
          back end, ReactJS, NodeJS, frameworks, consulting, prototypes, adobe xd, male, blonde hair
        </keywords>
        <meta name="description" content="I am here to figure out what your needs are. I am here for you. Let me help you make something great. I will not try to upsell you. I will always explain processes. Your company has needs. Let me work with you.The first step in the process. I start with the old school method of pencil and paper.'The first set of wire frames are hand drawn. I sometimes will convert these hand drawn wire frames into a prototyping software called XD. The first stage is in greyscale. Little details are not included in this step. I use adobe XD before I code anything. It is a good idea to figure out what you want before coding a project.This is where detail comes into play. We can figure out if the look feels right. Are buttons making sense? The prototype gives you a partially functional program. It is at this stage that user testing would occur.Once we have the prototype, it is important to get user feedback. Does the site work logically? Is it confusing? Does it need to go back a step?I like to use friends and family, but sometimes using people you do not know is best. I like to use heat maps to see what users are clicking on for each screen. Catching functionality errors at this stage is a quick fix. XD helps ensure that the end result is what the client wants before a single line of code is written.It is time to follow up with you to see what you think. Let us not waste precious time and money over something. Let us get this right.After completing the user testing phase. I usually follow back up with the client to go over my findings. Sometimes I will even do the user testing with the client. Then let them know how they stacked up compared to others. It is important to make sure the app looks and functions correctly.I use ReactJS, but we can compromise if you have a project that uses a different library or Framework. Do you like Angular? Great! Let us get started making your beautiful front end site today!Depending on the project, I usually start with test driven development. This means figuring out tests ahead of coding so that I can create and push clean code. I will approach a project using ReactJs. I like to use google analytics and some third pary libraries such as Helmut to address SEO concerns. Project architecture depends on the clients need. Redux, hooks, thunk, class components, functional components, and state management are all part of my front end process.I use NodeJS, but we can compromise if you have a project that uses a different language. Do you like Python or C#? Great! Let us get started making your restful API today!There are a few components I take into account when creating a restful API. Error handling is the main one. How am I telling the front end when something goes wrong. Overcoming those errors are easy with propper error handling. My front end components contain a minimal amount of business logic, that is the job of the back end. Functionality Testing, Usability Testing, Interface Testing, Compatibility Testing, and  Performance Testing. If you need testing, I do it. Test driven development is the best plan. No more buggy code!The test driven development used in the front end process usually cuts down on the testing time frame. I will always implement usability testing. Testing depends on what the client wants.This site was deployed on github pages, but we can deploy on a number of platforms. Do you like Heroku? Sit back and relax. Let me figure out the best option for your budget. I am always going to keep a client and their budget in mind when deploying. Are we looking at a fourtune 500 company? Then github pages is not the answer. There are a number of options for each circumstance. Let me help guide your decision making process." />


      </Helmet>
      <Home/>

    </div>
  );
}

export default App;
