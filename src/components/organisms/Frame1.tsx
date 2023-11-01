export function Frame1() {
  return (
    <>
      <div
        id="sobre"
        className="desktop:flex-row desktop:items-center desktop:justify-between desktop:mt-[220px] desktop:px-[56px] tablet:mt-[132px] tablet:px-[24px] phone:px-[16px] phone:mt-[96px] phone:flex-col phone:gap-[0px] flex gap-[173px]"
      >
        <div className="desktop:w-[542px] flex flex-col">
          <div className="tablet:text-left phone:text-center  leading-[15px] font-bold text-[#A02828] text-[12px] ">
            SOBRE
          </div>
          <div className="desktop:text-[64px] desktop:leading-[64px] tablet:text-[48px] tablet:mt-[16px] tablet:leading-[48px] phone:text-[32px] phone:mt-[16px] font-bold">
            nosso diferencial
          </div>
          <div className="desktop:w-[542px] desktop:text-[24px] desktop:leading-[30px] tablet:mt-[24px] phone:mt-[16px] phone:text-[16px] phone:leading-[20px] mt-[34px] text-[24px] leading-[30px]">
            Com o conceito de Hub Digital trazemos a ideia de que existem muitas
            maneiras de se entrar no ambiente digital e o nosso trabalho é fazer
            isso da maneira certa!
          </div>
          {/* <div className="tablet:justify-start tablet:mt-[56px] phone:justify-center mt-[37px] flex gap-[24px]">
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
        </div>
        <img
          src="/imgs/hajime.png"
          className="desktop:self-auto desktop:w-[578px] desktop:mt-0 tablet:w-[460px] tablet:self-center tablet:mt-[56px] phone:mt-[64px]"
        />
      </div>
    </>
  );
}
