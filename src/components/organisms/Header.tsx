import Ellipse from "components/atoms/Ellipse";

export function Header() {
  return (
    <>
      <div className="desktop:px-[56px] tablet:px-[24px] phone:px-[16px] phone:h-[82px] mt-[37px]  h-[96px] flex items-center justify-between">
        <img
          src="/icons/Frame.svg"
          className="desktop:w-[205px] tablet:w-[162px] phone:w-[135px]"
        />
        <div className="gap-[24px] underline desktop:flex tablet:hidden phone:hidden">
          <div className="font-[16px]">Home</div>
          <div className="font-[16px]">Hajime</div>
          <div className="font-[16px]">Serviços</div>
          <div className="font-[16px]">Cases</div>
        </div>
        <Ellipse title="orçamento" nameIcon="Ellipse1.svg" colorTitle={false} />
      </div>
    </>
  );
}
