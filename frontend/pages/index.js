import Layout from "../components/Layout";
import Link from "next/link";

// const Index = () => {
//   return (
//     <Layout>
//       <article className="port"></article>
//     </Layout>
//   );
// };

const Index = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <a href="https://www.youtube.com/channel/UC3DBujA39TtaUigSzclatng">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(" + "https://i.postimg.cc/0NzFmhfn/branayoga.png" + ")",
            }}
          ></div>
        </a>
      </div>
    </Layout>
  );
};
export default Index;
