import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Decensha Admin" },
    { name: "description", content: "Decensha Admin" },
  ];
};

export default function Index() {
  return (
    <div>
    </div>
  );
}
