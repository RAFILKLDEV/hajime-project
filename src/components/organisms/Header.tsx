import Ellipse from "components/atoms/Ellipse";
import { irPara } from "components/fuctions";

export function Header() {
  return (
    <>
      <div className="desktop:px-[56px] tablet:px-[24px] phone:px-[16px] phone:h-[82px] mt-[37px]  h-[96px] flex items-center justify-between">
        <img
          src="/icons/Frame.svg"
          className="desktop:w-[205px] tablet:w-[162px] phone:w-[135px]"
        />
        <div className="gap-[24px] underline desktop:flex tablet:hidden phone:hidden">
          <a href="" className="font-[16px]">
            Home
          </a>
          <button onClick={() => irPara("sobre")} className="font-[16px]">
            Hajime
          </button>
          <button onClick={() => irPara("servicos")} className="font-[16px]">
            Serviços
          </button>
          {/* <a href="" className="font-[16px]">
            Cases
          </a> */}
        </div>
        <a href="https://bit.ly/3J8I978">
          <Ellipse
            title="orçamento"
            nameIcon="Ellipse1.svg"
            colorTitle={false}
          />
        </a>
      </div>
    </>
  );
}
