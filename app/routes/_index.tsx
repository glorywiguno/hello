import type { MetaFunction } from "@remix-run/node";
import Tabs from "~/components/Tabs";

export const meta: MetaFunction = () => {
  return [
    { title: "Hello" },
    { name: "description", content: "Glory Wiguno's Profile" },
  ];
};

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
  return (
    <main className="main">
      <div className="l-mw">
        <div
          className="paper"
          style={{
            backgroundColor: "#f4e3b2",
            transform: "rotate(-0.5deg)",
          }}
        >
          <div>
            <h1>Hello my name is Glory</h1>
            <p>Currently based on Melbourne, Australia.</p>
          </div>
        </div>
      </div>
      <Tabs items={Contents} />
    </main>
  );
}
