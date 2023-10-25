import Ellipse from "components/atoms/Ellipse";

export function Frame1() {
  return (
    <>
      <div className="phone:px-[16px] phone:mt-[96px] phone:flex-col phone:gap-[0px] flex gap-[173px] mt-[145px] px-[56px]">
        <div className="flex flex-col">
          <div className="leading-[15px] font-extrabold text-[#A02828] text-[12px] ">
            SOBRE
          </div>
          <div className="phone:text-[32px] phone:mt-[16px] w-full text-[64px] font-bold">
            nosso diferencial
          </div>
          <div className="phone:text-[16px] phone:leading-[20px] mt-[34px] text-[24px] leading-[30px]">
            Com o conceito de Hub Digital trazemos a ideia de que existem muitas
            maneiras de se entrar no ambiente digital e o nosso trabalho é fazer
            isso da maneira certa!
          </div>
          <div className="phone:justify-center mt-[37px] flex gap-[24px]">
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
          </div>
        </div>
        <img src="/imgs/hajime.png" className="phone:mt-[64px]" />
      </div>
    </>
  );
}
