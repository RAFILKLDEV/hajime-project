import Ellipse from "components/atoms/Ellipse";

export function Orcamento() {
  return (
    <>
      <div className="flex flex-col items-center mx-[56px] mt-[193px]">
        <div className="font-bold text-red-800 text-[12px]">ORCAMENTO</div>
        <div className="font-bold text-[64px] mt-[16px] leading-[64px]">
          comece sua jornada hoje!
        </div>
        <div className="leading-[30px] text-[24px] mt-[32px]">
          Faça seu orçamento agora mesmo com um de nossos especialistas e comece
          em menos de 2 dias!
        </div>
        <div className="flex gap-[24px] mt-[64px]">
          <Ellipse nameIcon="Ellipse1.svg" title="comece agora" colorTitle={false}/>
          <Ellipse nameIcon="Ellipse3.svg" title="conheça mais" colorTitle={true}/>
        </div>
        <div className="border-[1px] mt-[193px] border-gray-200 w-full"> </div>
      </div>
    </>
  );
}
