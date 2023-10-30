import CardDiferencial from "components/molecules/CardDiferencial";

export function Diferencial() {
  return (
    <>
      <div className="desktop:px-[56px] desktop:mt-[202px] desktop:flex-row tablet:mt-[148px] tablet:px-[24px] phone:px-[16px] phone:flex-col phone:mt-[60px] flex justify-between">
        <div className="desktop:w-[542px] tablet:items-start phone:items-center flex flex-col">
          <div className="phone:text-center font-bold text-red-800 text-[12px]">
            NOSSO DIFERENCIAL
          </div>
          <div className="desktop:text-[64px] desktop:leading-[64px] desktop:text-left desktop:mt-[16px] tablet:text-[48px] tablet:leading-[48px] phone:text-[32px] phone:mt-[16px] phone:text-center phone:leading-[32px] text-[64px] font-bold leading-[64px]">
            planejamento estratégico
          </div>
          <div className="desktop:mt-[36px] desktop:text-[24px] desktop:leading-[30px] tablet:mt-[24px] tablet:text-left phone:mt-[16px] phone:text-center phone:text-[16px] phone:leading-[20px] ">
            Com o conceito de Hub Digital trazemos a ideia de que existem muitas
            maneiras de se entrar no ambiente digital e o nosso trabalho é fazer
            isso da maneira certa!
          </div>
          {/* <div className="tablet:mt-[24px] phone:mt-[16px] flex gap-[24px] desktop:mt-[37px]">
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
        <div className="desktop:gap-[32px] desktop:mt-0 tablet:gap-[16px] phone:gap-[24px] phone:mt-[72px] flex flex-col gap-[32px]">
          <CardDiferencial
            title="criar Presença Digital"
            desc="Desenvolvendo sua presença dentro do ambiente digital e nas redes sociais."
            number="1"
          />
          <CardDiferencial
            title="atrair"
            desc="A Força da sua marca é o que faz diferença na hora de ser visto e reconhecido na internet."
            number="2"
          />
          <CardDiferencial
            title="engajar"
            desc="A interação com o público é fator importante no resultado das estratégias de Marketing Digital."
            number="3"
          />
          <CardDiferencial
            title="converter"
            desc="Para uma boa conversão é necessário um cuidado maior no atendimento ao cliente."
            number="4"
          />
        </div>
      </div>
    </>
  );
}
