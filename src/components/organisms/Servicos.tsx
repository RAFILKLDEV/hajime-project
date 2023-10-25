import CardService from "components/molecules/CardService";
import Eclipse from "components/atoms/Ellipse";

export function Servicos() {
  return (
    <>
      <div className="phone:px-[16px] phone:mt-[96px] flex flex-col mt-[203px] px-[56px]">
        <div className="phone:text-center font-bold text-red-800 text-[12px]">
          SERVIÇOS
        </div>
        <div className="phone:flex-col mt-[16px] flex">
          <div className="phone:text-center phone:text-[32px] phone:leading-[32px] text-[64px] font-bold leading-[64px]">
            nossas capacidades
          </div>
          <div className="flex flex-col text-[24px]">
            <div className="phone:text-[16px] phone:leading-[20px] phone:text-center phone:mt-[16px] h-[60px] leading-[30px]">
              Serviços de extrema qualidade por um valor acessível para começar
              da maneira certa!
            </div>
            <div className="phone:mt-[16px] phone:text-[16px] phone:text-center phone:leading-[20px] mt-[31px] underline leading-[30px]">
              Entre em contato para consultar um serviço
            </div>
            <div className="phone:hidden mt-[36px]">
              <Eclipse
                nameIcon="Ellipse1.svg"
                title="comece agora"
                colorTitle={false}
              />
            </div>
          </div>
        </div>
        <div className="phone:flex-col phone:mt-[50px] phone:gap-[24px] phone:items-center mt-[72px] gap-[16px] flex">
          <CardService
            title="social media - orgânico"
            desc="Aumente seu alcance e seguidores e conquiste o seu público da
              maneira certa!"
          />
          <CardService
            title="tráfego pago - google ads"
            desc="Anúncios que convertem e geram impressões para sua marca."
          />
          <CardService
            title="desenvolvimento de software"
            desc="Impulsione seus negócios em até 20-35% por ano com um novo site."
          />
          <div className="phone:mt-[64px] mt-[36px]">
            <Eclipse
              nameIcon="Ellipse1.svg"
              title="comece agora"
              colorTitle={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
