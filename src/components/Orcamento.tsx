export function Orcamento() {
  return (
    <>
      <div className="flex flex-col items-center mx-[56px] mt-[193px]">
        <div className="font-bold text-red-800 text-[12px]">ORCAMENTO</div>
        <div className="font-bol text-[64px] mt-[16px] leading-[64px]">
          comece sua jornada hoje!
        </div>
        <div className="font-bol text-[24px] mt-[32px]">
          Faça seu orçamento agora mesmo com um de nossos especialistas e comece
          em menos de 2 dias!
        </div>
        <div className="flex gap-[24px] mt-[64px]">
          <div className="h-[112px] w-[112px] flex justify-center items-center">
            <img
              className="absolute h-[112px] w-[112px] "
              src="/icons/Ellipse2.svg"
            />
            <div className="z-10 text-white text-[16px] text-center">
              Comece Agora
            </div>
          </div>
          <div className="h-[112px] w-[112px] flex justify-center items-center">
            <img
              className="absolute h-[112px] w-[112px] "
              src="/icons/Ellipse2.svg"
            />
            <div className="z-10 text-white text-[16px] text-center">
              Comece Agora
            </div>
          </div>
        </div>
        <div className="border-[1px] mt-[193px] border-gray-200 w-full"> </div>
      </div>
    </>
  );
}