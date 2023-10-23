export function Footer() {
  return (
    <>
      <div className="flex justify-between mt-[53px] mx-[56px] mb-[160px]">
        <div className="flex flex-col justify-between gap-[155px]">
          <img src="/icons/Frame.svg" />
          <div>© 2022 hajime, Todos os direitos reservados. </div>
        </div>
        <div className="flex gap-[155px] text-[24px]">
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
            <div className="flex flex-col gap-[16px]">
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Linkedin</div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <div className="font-bold text-[24px]">diga olá</div>
            <div className="flex flex-col gap-[16px]">
              <div>ola@hajime.com</div>
              <div>+55 61 9 9806-2229</div>
              <div className="w-[320px]">
                SEPS 712/912, Lote C, Edifício Grand Ville - Bloco A - Asa Sul,
                Brasília - Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
