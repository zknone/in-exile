import { ScreenSize } from '../../types/data';
import cn from 'classnames';

export default function EnglishCredits({ screenSize }: { screenSize: ScreenSize }) {
  return (
    <>
      <div
        className={cn('flex flex-col', {
          'text-[calc(4px_+_12_*_((100vw_-_375px)_/_(1600_-_375)))]': screenSize !== 'default',
          'text-[18px]': screenSize === 'default'
        })}
      >
        <dl className="block">
          <dt className="font-bold">Judith Depaule</dt>
          <dd className="mb-[4%]">art direction</dd>
          <dt className="font-bold">Alexandre Plusnine</dt>
          <dd className="mb-[4%]">product design, web design, illustrations</dd>
          <dt className="font-bold">Ivan Streltsov</dt>
          <dd className="mb-[4%]">frontend development</dd>
          <dt className="font-bold">Ryan Mai</dt>
          <dd className="mb-[6%]">translation</dd>
          <div>
            <a href="http://welcome-cards.aa-e.org">welcome-cards.aa-e.org</a>
            <br />
            <a href="mailto:contact@aa-e.org">contact@aa-e.org</a>
          </div>
        </dl>
      </div>
    </>
  );
}
