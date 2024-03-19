import { useRef } from "react";
import type { MetaFunction } from "@remix-run/node";
import { getFromRandom2 } from "~/utils/getRandomClass";
import TabsCollection from "~/components/TabsCollection";
import HelloSVG from "~/components/HelloSVG/HelloSVG";

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
      <div>
        lorem ipsum dolor sit amet sir consectetur adipsicing elit
      </div>
    ),
  },
  {
    label: "Skills",
    bgColor: "#A9DEF9",
    content:
      (
      <div>
        lorem ipsum dolor sit amet sir consectetur adipsicing elit
      </div>
    )
  },
  {
    label: "Lorem ipsum",
    bgColor: "#FCB1A6",
    content: (
      <div>
        lorem ipsum dolor sit amet sir consectetur adipsicing elit
      </div>
    ),
  },
];

export default function Index() {
  // using ref for now so that value doesnt change when there's update
  const modClass = useRef( getFromRandom2('hero--tilt-01', 'hero--tilt-02'));
  const modClass2 = useRef( getFromRandom2('deco--tilt-01', 'deco--tilt-02'));

  return (
    <main className="main">
      <div className="l-mw home-landing">

        <div
          className={`paper hero bg-color-01 ${modClass.current}`}
        >
          <div className="hero__content">
            <h1 className="hero__heading">Hello my name is Glory.</h1>
            <p>A web developer currently based on Melbourne, Australia.</p>
          </div>
        </div>

        <div
          className={`paper paper--extra-pad bg-color-05 deco ${modClass2.current}`}
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
