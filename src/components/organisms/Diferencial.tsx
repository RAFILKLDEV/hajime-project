import Ellipse from "components/atoms/Ellipse";
import CardDiferencial from "components/molecules/CardDiferencial";

export function Diferencial() {
  return (
    <>
      <div className="phone:px-[16px] phone:flex-col flex justify-between mt-[202px] px-[56px]">
        <div className="phone:items-center flex flex-col">
          <div className="phone:text-center font-bold text-red-800 text-[12px]">
            NOSSO DIFERENCIAL
          </div>
          <div className="phone:text-[32px] phone:mt-[16px] phone:text-center phone:leading-[32px] text-[64px] font-bold leading-[64px]">
            planejamento estratégico
          </div>
          <div className="phone:text-center phone:text-[16px] phone:leading-[20px] text-[24px] mt-[36px] leading-[30px]">
            Com o conceito de Hub Digital trazemos a ideia de que existem muitas
            maneiras de se entrar no ambiente digital e o nosso trabalho é fazer
            isso da maneira certa!
          </div>
          <div className="phone:mt-[16px] flex gap-[24px] mt-[37px]">
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
        <div className="phone:gap-[24px] phone:mt-[72px] flex flex-col gap-[32px]">
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
