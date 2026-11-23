import Data from '../util/Data';
import FAQCollapseCard from './FAQCollapseCard';

const questions = Data.getFAQ();

export default function FAQ() {
  return (
    <section id='faq' className="flex flex-col gap-6 p-5 lg:py-12 lg:px-10 xl:p-20">
      <h2 className="text-3xl font-semibold text-(--color-black) xl:text-4xl">Perguntas frequentes</h2>
      <div className="flex flex-col gap-4 lg:max-w-[80%] xl:max-w-[70%] self-center">
        {questions.map((item, index) => (
          <FAQCollapseCard
            key={index}
            question={item.question}
            answer={item.answer}
            defaultOpen={item.defaultOpen}
          />
        ))}
      </div>
    </section>
  );
}
