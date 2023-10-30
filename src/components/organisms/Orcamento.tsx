
export function Orcamento() {
  return (
    <>
      <div className="desktop:mt-[193px] desktop:px-[56px] desktop:items-center tablet:mt-[116px] tablet:items-center tablet:px-[24px] phone:items-center phone:px-[16px] phone:mt-[60px] flex flex-col ">
        <div className="font-bold text-red-800 text-[12px]">ORCAMENTO</div>
        <div className="desktop:text-[64px] desktop:mt-[16px] desktop:leading-[64px] tablet:mt-[16px] tablet:text-[48px] tablet:leading-[48px] phone:mt-[16px] phone:text-[32px] phone:leading-[32px] phone:text-center font-bold">
          comece sua jornada hoje!
        </div>
        <div className="desktop:text-left desktop:leading-[20px] desktop:px-0 desktop:text-[24px] desktop:mt-[32px] tablet:px-[32px] tablet:leading-[20px] tablet:text-center tablet:mt-[24px] phone:mt-[16px] phone:text-[16px] ">
          Faça seu orçamento agora mesmo com um de nossos especialistas e comece
          em menos de 2 dias!
        </div>
        {/* <div className="tablet:mt-[54px] flex gap-[24px] mt-[64px]">
          <Ellipse
            nameIcon="Ellipse1.svg"
            title="comece agora"
            colorTitle={false}
          />
          <Ellipse
            nameIcon="Ellipse3.svg"
            title="conheça mais"
            colorTitle={true}
          />
        </div> */}
        <div className="phone:mt-[86px] border-[1px] mt-[193px] border-gray-200 w-full">
          {" "}
        </div>
      </div>
    </>
  );
}
