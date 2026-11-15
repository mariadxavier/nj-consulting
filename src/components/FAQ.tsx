import FAQCollapseCard from './FAQCollapseCard';

const questions = [
  {
    question: 'Quem pode solicitar o cartão?',
    answer:
      'Atendemos servidores das praças atendidas, efetivos, comissionados ou contratados conforme convênio da folha. A elegibilidade é confirmada na análise, que considera o vínculo e as condições do servidor.',
    defaultOpen: true,
  },
  {
    question: 'Qual é a taxa de juros?',
    answer:
      'Taxas, limites e demais condições são informados antes da contratação. A concessão do cartão está sujeita à análise.',
  },
];

export default function FAQ() {
  return (
    <section className="flex flex-col gap-6 p-5">
      <h1 className="text-3xl font-semibold text-(--color-black)">Perguntas frequentes</h1>
      <div className="flex flex-col gap-4">
        {questions.map((item) => (
          <FAQCollapseCard
            key={item.question}
            question={item.question}
            answer={item.answer}
            defaultOpen={item.defaultOpen}
          />
        ))}
      </div>
    </section>
  );
}
