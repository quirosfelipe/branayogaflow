import Layout from "../components/Layout";
import Link from "next/link";
import Footer from "../components/Footer";
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
      <main>
        <article>
          <a
            href="https://www.youtube.com/channel/UC3DBujA39TtaUigSzclatng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="container-fluid">
              <img
                className="home-image"
                src="/static/images/brana.png"
                // style={{
                //   backgroundImage:
                //     "url(" +
                //     "https://i.postimg.cc/MZjBz3d1/Brana-Yoga-Purpple.png" +
                //     ")",
                // }}
              />
            </div>
          </a>
        </article>
      </main>
      <Footer />
    </Layout>
  );
};
export default Index;
