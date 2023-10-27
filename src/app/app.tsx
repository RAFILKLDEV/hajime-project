import { Diferencial } from "components/organisms/Diferencial";
import { Footer } from "components/organisms/Footer";
import { Frame1 } from "components/organisms/Frame1";
import { Header } from "components/organisms/Header";
import { Intro } from "components/organisms/Intro";
import { Orcamento } from "components/organisms/Orcamento";
import { Servicos } from "components/organisms/Servicos";

function App() {
  return (
    <main className="flex justify-center items-center w-full">
      <div className="desktop:w-[1440px] tablet:w-[768px] phone:w-[320px] h-full font-genSans">
        <Header />
        <Intro />
        <Frame1 />
        <Servicos />
        <Diferencial />
        <Orcamento />
        <Footer />
      </div>
    </main>
  );
}

export default App;
