export function Footer() {
  return (
    <>
      <div className="desktop:flex-row desktop:justify-between desktop:mt-[53px] desktop:px-[56px] desktop:mb-[160px] tablet:mt-[53px] tablet:px-[24px] phone:mt-[32px] phone:flex-col phone:px-[16px] phone:mb-[60px] flex">
        <div className="desktop:-order-1 desktop:justify-end tablet:items-start phone:order-5 phone:mt-[60px] phone:items-center phone:gap-[16px] flex flex-col justify-between gap-[155px]">
          <img
            src="/icons/Frame.svg"
            className="desktop:w-[205px] tablet:w-[162px]"
          />
          <div className="phone:text-center">
            © 2022 hajime, Todos os direitos reservados.
          </div>
        </div>
        <div className="desktop:gap-[155px] desktop:text-[24px] tablet:flex-nowrap tablet:justify-between phone:text-[16px] phone:flex-wrap phone:gap-[70px] phone:justify-center flex">
          <div className="flex flex-col gap-[30px]">
            <div className="font-bold text-[24px]">index</div>
            <div className="flex flex-col gap-[16px]">
              <div>home</div>
              <div>hajime</div>
              <div>serviços</div>
              <div>cases</div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="font-bold text-[24px]">redes</div>
            <div className="flex flex-col gap-[16px] justify-start">
              <a
                href="https://www.instagram.com/hajimehubdigital/"
                className="flex gap-2 h-6 items-center"
              >
                <img src="icons/Instagram.png" width={30} height={10} />
                Instagram
              </a>
              <a href="" className="flex gap-2 h-6 items-center">
                <img src="icons/Facebook.png" width={30} height={10} />
                Facebook
              </a>
              <a href="" className="flex gap-2 h-6 items-center">
                <img src="icons/Linkedin.png" width={30} height={10} />
                Linkedin
              </a>
            </div>
          </div>
          <div className="tablet:items-start phone:items-center flex flex-col gap-[30px]">
            <div className="font-bold text-[24px]">diga olá</div>
            <div className="desktop:w-[317px] tablet:w-[220px] tablet:items-start phone:items-center flex flex-col gap-[16px]">
              <div>hajimehubdigital@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
