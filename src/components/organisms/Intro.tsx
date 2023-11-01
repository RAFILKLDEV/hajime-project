import { irPara } from "components/fuctions";

export function Intro() {
  return (
    <>
      <div
        id="hajime"
        className="desktop:px-[56px] desktop:mt-[151px] tablet:px-[24px] tab phone:mt-[47px] phone:px-[16px]"
      >
        <div className="desktop:w-[1104px] desktop:text-[104px] desktop:leading-[104px] tablet:text-left tablet:w-[520px] tablet:[56px] phone:text-[48px] phone:text-center phone:leading-[48px] font-genSans font-bold">
          seja bem-vindo a nova forma de fazer
        </div>
        <div className="desktop:w-[1104px] desktop:text-[104px] desktop:leading-[104px] tablet:text-left tablet:[56px] phone:text-[48px] phone:text-center phone:leading-[48px] text-red-600 font-genSans font-bold">
          marketing{" "}
        </div>
      </div>
      <div className="desktop:mt-[48px] desktop:leading-[30px] desktop:text-[24px] desktop:px-[56px] tablet:text-left tablet:px-[24px] phone:px-[16px] px-[56px] phone:text-[16px] phone:text-center phone:leading-[16px] phone:mt-[32px] font-genSans">
        Toda empresa se inicia com um sonho e a hajime é o culminar desse sonho.
        Nosso objetivo é trazer o seu negócio para o mundo digital de uma forma
        suave e precisa.
      </div>
      <div className="desktop:w-full phone:mt-[64px] flex tablet:justify-center phone:justify-center mt-[69px]">
        <button onClick={() => irPara("sobre")}>
          <img
            src="/icons/Arrow.svg"
            className="desktop:w-[64px] desktop:h-[64px] tablet:w-[48px] tablet:h-[48px] phone:w-[40px] phone:h-[40px] "
          />
        </button>
      </div>
    </>
  );
}
