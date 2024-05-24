import { ScreenSize } from '../../types/data';
import cn from 'classnames';

export default function FrenchCredits({ screenSize }: { screenSize: ScreenSize }) {
  return (
    <>
      <div
        className={cn('flex flex-col', {
          'text-[calc(4px_+_12_*_((100vw_-_375px)_/_(1600_-_375)))]': screenSize !== 'default',
          'text-[18px]': screenSize === 'default'
        })}
      >
        <dl className="block">
          <dt
            className={cn('font-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_375px)_/_(1600_-_375)))]': screenSize !== 'default',
              'text-[22px]': screenSize === 'default'
            })}
          >
            Judith Depaule
          </dt>
          <dd className="mb-[10%]">direction artistique</dd>
          <dt
            className={cn('font-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_375px)_/_(1600_-_375)))]': screenSize !== 'default',
              'text-[22px]': screenSize === 'default'
            })}
          >
            Alexandre Plusnine
          </dt>
          <dd className="mb-[10%]">design produit, design web, illustrations</dd>
          <dt
            className={cn('font-bold', {
              'text-[calc(6px_+_12_*_((100vw_-_375px)_/_(1600_-_375)))]': screenSize !== 'default',
              'text-[22px]': screenSize === 'default'
            })}
          >
            Ivan Streltsov
          </dt>
          <dd className="mb-[10%]">développement frontend</dd>
        </dl>
      </div>
    </>
  );
}
