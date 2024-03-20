import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { getFromRandom2 } from "~/utils/getRandom";
import Contacts from "~/components/Contacts";
import TabsCollection from "~/components/TabsCollection";
import HelloSVG from "~/components/HelloSVG/HelloSVG";
import TagsList from "~/components/TagsList";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello" },
    { name: "description", content: "Glory Wiguno's Profile" },
  ];
};

/*
 * might move to other file for the contents.
 * might also reference the color from css variable, but then it might produce
 * a flash where the color change
 */
const Contents = [
  {
    label: "Interests",
    bgColor: "#CDDBA9",
    content: (
      <>
        <p>
          I have a keen interest in front-end web development. I just find it interesting, fun and can be an outlet for creativity. It&#39;s a mix of problem solving and visual creativity, from trying to solve how to transform data, manage states and requests, to trying to make a nice looking interface with a snappy animation or transitions.
        </p>
        <p>
          Topics that I am interested in particular are web animations, design systems, UI state design and management, and well, front-end web development in general.
        </p>
        <p>
          Fun fact, there was a <a href="https://twitter.com/pwnsdx/status/1040944750973595649" target="_blank" rel="noreferrer">bug</a> that can force restart iOS decice with just CSS.<br/>
          Turns out that not only database issue that could cause big problem.
        </p>
      </>
    ),
  },
  {
    label: "Skills",
    bgColor: "#A9DEF9",
    content:
      (
      <>
        <p>
          I had around 5 years experience as a web developer, mainly specializing in front-end development. However, my current position let me experience some other things that are quite new for me.
        </p>
        <p>Here are some keywords that might best describe the things that I had known or used in the past:</p>
        <TagsList
          items={[
            "React","Vue","JavaScript", "TypeScript", "HTML", "CSS", "SASS/SCSS", "WordPress", "Shopify", "Liquid", "Node","Figma", "Gulp", "BEM", "Sharepoint", "Power Pages", "SPFx"
          ]}
        />
      </>
    )
  },
  {
    label: "About the site",
    bgColor: "#FCB1A6",
    content: (
      <>
        <p>
          I started building this project around March 2024. I decided to try something new as I wanted to build something similar years before, but have not dedicated the time yet to build one.
        </p>
        <p>
          At the time of writing this, it was built using <a href="https://remix.run/" target="_blank" rel="noreferrer">Remix</a>, SASS to help with styling, and <a href="https://animejs.com/" target="_blank" rel="noreferrer">animejs</a> to help with some of the animations. The social icons are from <a href="start" target="_blank" rel="noreferrer">Font Awesome</a>.
        </p>
        <p>
          I did the design while doing the code, hence it&#39;s quite simple; inspired by some &#34;Post-It&#34; notes that are laying around on top of my desk. I was thinking a little bit hard on how to make a really simple and professional looking one, but ended up with one that&#39;s looking more playful.
        </p>
        <p>
          In the end, it&#39;s a quite fun process, and I still pick up a lot of new things and spotted a couple of things that I had overlooked, things that can be improved.
        </p>
      </>
    ),
  },
];

export default function Index() {
  // using state since ref is not intended to be read on render
  // eslint-disable-next-line
  const [modClass, setModClass] = useState( getFromRandom2('hero--tilt-01', 'hero--tilt-02'));
  // eslint-disable-next-line
  const [modClass2, setModClass2] = useState( getFromRandom2('deco--tilt-01', 'deco--tilt-02'));


  return (
    <main className="main">
      <div className="l-mw home-landing">

        <div
          className={`paper hero bg-color-01 ${modClass}`}
        >
          <div className="hero__content">
            <h1 className="hero__heading">Hello my name is Glory.</h1>
            <p>
              A web developer<sup>1</sup> currently based on Melbourne, Australia.<br/>
              <span style={{ fontSize: '0.6em', display: 'block', marginTop: '1.2em' }}><sup>1</sup> I know there&#39;s a lot of spiders down under, but I am not a spider.</span>
            </p>
            <Contacts/>
          </div>
        </div>

        <div
          className={`paper paper--extra-pad bg-color-05 deco ${modClass2}`}
        >
          <HelloSVG
          className="deco__svg"
          />
        </div>

      </div>
      <TabsCollection items={Contents} />
    </main>
  );
}
