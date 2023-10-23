export function Frame1() {
  return (
    <>
      <div className="h-[667px] flex gap-[173px] mt-[145px] mx-[56px]">
        <div className="mt-[141px] flex flex-col w-[542px]">
          <div className="leading-[15px] font-extrabold text-[#A02828] text-[12px] ">
            SOBRE
          </div>
          <div className="mt-4 text-[64px] h-[64px] font-bold">
            nosso diferencial
          </div>
          <div className="mt-[34px] text-[24px] leading-[30px]">
            Com o conceito de Hub Digital trazemos a ideia de que existem muitas
            maneiras de se entrar no ambiente digital e o nosso trabalho é fazer
            isso da maneira certa!
          </div>
          <div className="mt-[37px] flex gap-[24px]">
            <div className="h-[112px] w-[112px]  flex justify-center items-center">
              <img
                className="absolute h-[112px] w-[112px] "
                src="/icons/Ellipse1.svg"
              />
              <div className="z-10 w-[60px] text-center text-white text-[16px]">
                comece agora
              </div>
            </div>
            <div className="h-[112px] w-[112px] flex justify-center items-center">
              <img
                className="absolute h-[112px] w-[112px] "
                src="/icons/Ellipse3.svg"
              />
              <div className="z-10 text-[#A02828] w-[60px] text-center text-[16px]">
                conheça mais
              </div>
            </div>
          </div>
        </div>
        <img src="/imgs/hajime.png" className="mr-[35px]" />
      </div>
    </>
  );
}
