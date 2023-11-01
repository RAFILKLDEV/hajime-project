import { irPara } from "components/fuctions";

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
            © 2023 hajime, Todos os direitos reservados.
          </div>
        </div>
        <div className="desktop:gap-[155px] desktop:text-[24px] tablet:flex-nowrap tablet:justify-between tablet:px-24 tablet:items-start phone:text-[16px] phone:flex-wrap phone:gap-[20px] phone:items-center phone:justify-center flex">
          <div className="flex flex-col gap-[30px] justify-items-start">
            <div className="font-bold text-[24px] tablet:self-start phone:self-center">
              index
            </div>
            <div className="grid grid-rows-3 gap-[16px] justify-items-start tablet:justify-items-start phone:justify-items-center">
              <button onClick={() => irPara("home")} className="h-8">
                home
              </button>
              <button onClick={() => irPara("sobre")} className="h-8">
                hajime
              </button>
              <button onClick={() => irPara("servicos")} className="h-8">
                serviços
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="font-bold text-[24px] tablet:self-start phone:self-center">
              contatos
            </div>
            <div className="grid grid-rows-3 gap-[16px] justify-items-start tablet:justify-items-start phone:justify-items-center">
              <a
                href="https://www.instagram.com/hajimehubdigital/"
                className="flex gap-2 h-8 items-center"
              >
                <img src="icons/Instagram.png" width={30} height={10} />
                Instagram
              </a>
              <a href="https://www.facebook.com/profile.php?id=100086152775882&mibextid=ZbWKwL" className="flex gap-2 h-8 items-center">
                <img src="icons/Facebook.png" width={30} height={10} />
                Facebook
              </a>
              {/* <a href="" className="flex gap-2 h-8 items-center">
                <img src="icons/Linkedin.png" width={30} height={10} />
                Linkedin
              </a> */}
              <a href="" className="flex gap-2 h-8 items-center">
                <img src="icons/Email.png" width={30} height={10} />
                hajimehubdigital@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
