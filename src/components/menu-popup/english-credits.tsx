import { ScreenSize } from "../../types/data";
import cn from 'classnames';


export default function EnglishCredits({ screenSize }: { screenSize: ScreenSize })  {
  return (
    <>
      <div
        className={cn('flex flex-col', {
          'text-[calc(4px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]': screenSize !== 'default',
          'text-[18px]': screenSize === 'default'
        })}
      >
        <dl className="block">
          <dt
            className={cn('text-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]': screenSize !== 'default',
              'text-[18px]': screenSize === 'default'
            })}
          >
            Judith Depaule
          </dt>
          <dd className="">Direction artistique, rédaction, édition.</dd>
          <dt
            className={cn('text-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]': screenSize !== 'default',
              'text-[18px]': screenSize === 'default'
            })}
          >
            Alexandre Plusnine
          </dt>
          <dd>Direction artistique, gestion de produit, design web, design UI, illustrations.</dd>
          <dt
            className={cn('text-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_360px)_/_(1600_-_360)))]': screenSize !== 'default',
              'text-[22px]': screenSize === 'default'
            })}
          >
            Ivan Streltsov
          </dt>
          <dd>Développement frontend</dd>
        </dl>
      </div>
    </>
  );
}
