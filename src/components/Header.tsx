export function Header() {
  return (
    <>
      <div className=" mt-[37px] mx-[56px] h-[96px] flex items-center justify-between">
        <img src="/icons/Frame.svg" />
        <div className="flex gap-[24px]">
          <div className="font-[16px]">Home</div>
          <div className="font-[16px]">Hajime</div>
          <div className="font-[16px]">Serviços</div>
          <div className="font-[16px]">Cases</div>
        </div>
        <div className="h-[96px] w-[96px] flex justify-center items-center">
          <img className="absolute" src="/icons/Ellipse1.svg" />
          <div className="z-10 text-white text-[16px] leading-[20px]">Orçamento</div>
        </div>
      </div>
    </>
  );
}
