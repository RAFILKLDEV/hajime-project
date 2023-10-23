export function Servicos() {
  return (
    <>
      <div className="flex flex-col mt-[203px] mx-[56px]">
        <div className="font-bold text-red-800 text-[12px]">SERVIÇOS</div>
        <div className="mt-[16px] flex justify-between">
          <div className="h-[128px] text-[64px] w-[431px] font-bold leading-[64px]">
            nossas capacidades
          </div>
          <div className="flex flex-col w-[766px] text-[24px]">
            <div className="h-[60px] leading-[30px]">
              Serviços de extrema qualidade por um valor acessível para começar
              da maneira certa!
            </div>
            <div className="mt-[31px] underline leading-[30px]">
              Entre em contato para consultar um serviço
            </div>
            <div className="flex mt-[36px]">
              <div className="h-[112px] w-[112px]  flex justify-center items-center">
                <img
                  className="absolute h-[112px] w-[112px] "
                  src="/icons/Ellipse1.svg"
                />
                <div className="z-10 w-[60px] text-center text-white text-[16px]">
                  comece agora
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[72px] gap-[16px] flex">
          <div className="w-[432px] border-[24px] border-white rounded-[24px] h-[339px] bg-white">
            <img src="/icons/Thumbs.png" className="h-[72px]" />
            <div className="mt-[64px] text-[24px] h-[24px] leading-[24px] text-[#A02828] font-bold">
              social media - orgânico
            </div>
            <div className="mt-[17px] text-[24px] leading-[30px]">
              Aumente seu alcance e seguidores e conquiste o seu público da
              maneira certa!
            </div>
          </div>
          <div className="w-[432px] border-[24px] border-white rounded-[24px] h-[339px] bg-white">
            <img src="/icons/Thumbs.png" className="h-[72px]" />
            <div className="mt-[64px] text-[24px] h-[24px] leading-[24px] text-[#A02828] font-bold">
              tráfego pago - google ads
            </div>
            <div className="mt-[17px] text-[24px] leading-[30px]">
              Anúncios que convertem e geram impressões para sua marca.
            </div>
          </div>
          <div className="w-[432px] border-[24px] border-white rounded-[24px] h-[339px] bg-white">
            <img src="/icons/Thumbs.png" className="h-[72px]" />
            <div className="mt-[64px] text-[24px] h-[24px] leading-[24px] text-[#A02828] font-bold">
              desenvolvimento de software
            </div>
            <div className="mt-[17px] text-[24px] leading-[30px]">
              Impulsione seus negócios em até 20-35% por ano com um novo site.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
