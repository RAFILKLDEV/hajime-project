import CardService from "components/molecules/CardService";

export function Servicos() {
  return (
    <>
      <div className="desktop:px-[56px] desktop:mt-[203px] tablet:mt-[116px] tablet:items-start tablet:px-[24px] phone:px-[16px] phone:mt-[96px] flex flex-col">
        <div className="phone:text-center font-bold text-red-800 text-[12px]">
          SERVIÇOS
        </div>
        <div className="desktop:flex-row desktop:w-full desktop:justify-between tablet:items-start phone:flex-col mt-[16px] flex">
          <div className="desktop:w-[432px] desktop:text-left desktop:text-[64px] desktop:leading-[64px] tablet:text-[48px] tablet:leading-[48px] phone:text-center phone:text-[32px] phone:leading-[32px] text-[64px] font-bold leading-[64px]">
            nossas capacidades
          </div>
          <div className="flex flex-col text-[24px]">
            <div className="desktop:text-[24px] desktop:text-left desktop:w-[766px] tablet:leading-[20px] phone:text-[16px] phone:leading-[20px] phone:text-center phone:mt-[16px] leading-[30px]">
              Serviços de extrema qualidade por um valor acessível para começar
              da maneira certa!
            </div>
            <div className="desktop:text-[24px] desktop:mt-[32px] tablet:text-left tablet:mt-[16px] phone:mt-[16px] phone:text-[16px] phone:text-center phone:leading-[20px] mt-[31px] underline leading-[30px]">
              Entre em contato para consultar um serviço
            </div>
            {/* <div className="tablet:block phone:hidden tablet:mt-[36px]">
              <Eclipse
                nameIcon="Ellipse1.svg"
                title="comece agora"
                colorTitle={false}
              />
            </div> */}
          </div>
        </div>
        <div className="tablet:flex-row tablet:justify-center w-full tablet:gap-[16px] phone:flex-col phone:mt-[50px] phone:gap-[24px] phone:items-center desktop:mt-[72px] desktop:gap-[16px] flex">
          <CardService
            title="social media - orgânico"
            desc="Aumente seu alcance e seguidores e conquiste o seu público da
              maneira certa!"
            icon="Thumbs.png"
          />
          <CardService
            title="tráfego pago - google ads"
            desc="Anúncios que convertem e geram impressões para sua marca."
            icon="Thumbs.png"
          />
          <CardService
            title="desenvolvimento de software"
            desc="Impulsione seus negócios em até 20-35% por ano com um novo site."
            icon="Thumbs.png"
          />
          {/* <div className="tablet:hidden phone:mt-[64px] desktop:mt-[36px]">
            <Eclipse
              nameIcon="Ellipse1.svg"
              title="comece agora"
              colorTitle={false}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
