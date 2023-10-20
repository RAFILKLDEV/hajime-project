import { Frame1 } from "components/Frame1";
import { Header } from "components/Header";
import { Intro } from "components/Intro";
import { Servicos } from "components/Servicos";

function App() {
  return (
    <main className="flex justify-center">
      <div className="bg-green-100 w-[1440px] h-full">
        <Header />
        <Intro />
        <Frame1 />
        <Servicos />
      </div>
    </main>
  );
}

export default App;
