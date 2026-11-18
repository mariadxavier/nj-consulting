import WalletIcon from '@/src/assets/WalletIcon.svg';
import ClockIcon from '@/src/assets/ClockIcon.svg';
import TagIcon from '@/src/assets/TagIcon.svg';
import ArmorIcon from '@/src/assets/ArmorIcon.svg';
import Article from './Article';
import CheckIcon from '@/src/assets/CheckIcon';
import { Frame } from '@/src/components';

export default function BRCardInfo() {
  return (
    <section id='brcard' className="flex flex-col md:flex-row justify-center lg:justify-evenly lg:items-center gap-6 md:gap-4 px-5 py-9 md:py-10">
      <div className="flex flex-col justify-center gap-6 md:gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-(--color-black) text-3xl xl:text-4xl">O BRCard</h1>
          <p className="text-(--color-gray) xl:text-lg">
            Cartão de crédito e cartão benefício em um só, voltado a servidores públicos.
          </p>
        </div>
        <Frame
          title="Um cartão pensado para servidores públicos"
          subtitle="Com benefícios práticos, atendimento humano e condições transparentes desde o início do processo."
        >
          <Article
            icon={WalletIcon.src}
            title="Saque de até 70% do limite"
            subtitle="Dinheiro direto na conta, confore as condições da análise"
          />
          <Article
            icon={ClockIcon.src}
            title="Pix em até 2 horas"
            subtitle="Agilidade após a liberação. Prazos informados antes da contratação."
          />
          <Article
            icon={TagIcon.src}
            title="Sem anuidade"
            subtitle="Nenhuma taxa de manutenção do cartão."
          />
          <Article
            icon={ArmorIcon.src}
            title="Sem consulta SPC/Serasa"
            subtitle="A avaliação considera seu vínculo como servidor. Concessão sujeita à análise."
          />
        </Frame>
      </div>
      <div className="flex flex-col justify-center gap-6 md:h-full md:justify-around">
        <div className="bg-(--color-green-light-bg) flex flex-col p-4 gap-2.5 rounded-xl">
          <h2 className="font-semibold text-(--color-green) text-lg xl:text-xl 2xl:text-2xl">Benefícios práticos</h2>
          <div className="flex items-center gap-2 text-(--color-green)">
            <CheckIcon />
            <p className="text-sm xl:text-[1rem] 2xl:text-lg">Saque de até 70% do limite</p>
          </div>{' '}
          <div className="flex items-center gap-2 text-(--color-green)">
            <CheckIcon />
            <p className="text-sm xl:text-[1rem] 2xl:text-lg">Saque de até 70% do limite</p>
          </div>{' '}
          <div className="flex items-center gap-2 text-(--color-green)">
            <CheckIcon />
            <p className="text-sm xl:text-[1rem] 2xl:text-lg">Saque de até 70% do limite</p>
          </div>{' '}
          <div className="flex items-center gap-2 text-(--color-green)">
            <CheckIcon />
            <p className="text-sm xl:text-[1rem] 2xl:text-lg">Saque de até 70% do limite</p>
          </div>
        </div>
        <div className="text-(--color-white) bg-(--color-green) rounded-3xl flex flex-col gap-2 p-5.5">
          <h1 className="font-semibold text-xl">Seguro de vida gratuito</h1>
          <p>Proteção incluída no cartão</p>
        </div>
        <div className="bg-(--color-green-light-bg) flex flex-col p-4 gap-2.5 rounded-xl text-(--color-gray) xl:text-lg">
          <h2 className="font-semibold text-(--color-green) text-lg xl:text-xl">Descontos em farmácias</h2>
          <p>Vantagens no dia a dia para você e sua família</p>
        </div>
      </div>
    </section>
  );
}
