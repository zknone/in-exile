import { useEffect, useState } from 'react';
import Card from '../card/card';
import cn from 'classnames';
import { ScreenSize } from '../../types/data';
export default function EntranceScreen(props: { onClick: () => void; isMobile?: boolean; screenSize: ScreenSize }) {
  const { onClick, isMobile } = props;
  const [isCardActive, setCardsActive] = useState(false);
  const handlePopupHover = () => {
    setCardsActive(true);
  };

  const handlePopupLeave = () => {
    setCardsActive(false);
  };


  const [isMacAir, setIsMacAir] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMacAir(window.innerWidth < 1300);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      <div className={cn(
        "absolute right-[50%] flex gap-2 justify-center",
        {"-top-[130px]": !isMacAir},
        {"-top-[130px]": isMacAir},
      )}>
        <div
          onMouseEnter={handlePopupHover}
          onMouseLeave={handlePopupLeave}
          className={cn(
            "block absolute z-50 w-[407px] rounded-[40px] border-2 border-[#FF6CFF] bg-[#FF6CB6] p-2 shadow-card text-xl hover:bg-[#F93598] hover:border-[#B1256C] popup",
            {"h-[647px]": !isMacAir},
            {"h-[607px]": isMacAir},
            
          )}
          onClick={onClick}
        >
          <div className="absolute popup-content w-full flex flex-col justify-between h-full border-2 rounded-[30px] border-[#FF6CFF] bg-white hover:border-[#F93598]">
            <div className={cn(
              "absolute px-9 mx-3 max-h-[505px] overflow-auto flex flex-col gap-y-5",
              {"my-12": !isMacAir},
              {"my-10": isMacAir},
            )}>
              <div className="font-bold">
                Cartes d&rsquo;accueil en résidence d&rsquo;un·e artiste en exil dans une école
                d&rsquo;art
              </div>
              <div>
                Ce projet est né dans le cadre de «&#x202F;PUZLP – artistes en exil dans les écoles
                d&rsquo;art&#x202F;», qui réunit des écoles d&rsquo;art belges (ESA Saint-Luc Bruxelles,
                l&rsquo;ERG), l&rsquo;Association Nationale des Écoles supérieures d&rsquo;Art
                françaises (ANdÉA) et l&rsquo;atelier des artistes en exil (aa-e) avec le soutien du
                programme Erasmus+ de l&rsquo;Union Européenne.
              </div>
              <div>
                Une réflexion transnationale sur les enjeux des résidences organisées dans les
                écoles d&rsquo;art a permis d&rsquo;identifier des points de vigilance, puis de
                créer un outil d&rsquo;accueil facilitateur conçu comme un jeu de cartes.
                L&rsquo;outil proposé synthétise des recommandations et des « bonnes pratiques », à
                ajuster selon la situation de l&rsquo;artiste, le contexte et les possibilités de
                chaque école. Tout part de la volonté d&rsquo;enrichissement mutuel des écoles et
                des artistes en exil.
              </div>
              <div>
                Ces «&#x202F;cartes d&rsquo;accueil&#x202F;» se nourrissent de discussions avec les partenaires de
                PUZLP, les écoles d&rsquo;art et les acteurs du projet belge «&#x202F;Exil et création&#x202F;»,
                et de dialogues avec des artistes en exil accueilli·es dans des écoles d&rsquo;art.
                Un premier prototype de résidence mené en 2020 à l&rsquo;ESAAA à Annecy avec des
                membres de l&rsquo;aa-e, a contribué à adapter aux artistes le programme Pause porté
                par le Collège de France. Depuis la moitié des écoles d&rsquo;arts et de design
                françaises ont reçu ou reçoivent des dizaines d&rsquo;artistes en exil de tous
                horizons pour des résidences de recherche, de création ou d&rsquo;enseignement.
              </div>
              <div>
                Musicien·nes, performeur·euses, danseur·euses, peintres, sculpteur·ices,
                photographes, metteur·euses en scène, scénographes, cinéastes … venu·es
                d&rsquo;Afghanistan, de Birmanie, de Hong-Kong, du Kurdistan, du Liban, de
                Palestine, de République du Congo, de République démocratique du Congo, de Russie,
                de Syrie, de Tunisie, d&rsquo;Ukraine….Le monde entier circule, se déplace et se
                rencontre dans les écoles supérieures d&rsquo;art, et ces « cartes d&rsquo;accueil »
                sont là pour aider et accompagner.
              </div>
              <img src="/images/euro-logo.jpg" />
              <div className="font-bold text-center">Cliquez sur la carte pour continuer</div>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <section className="absolute flex right-[50%] justify-center">
          <div
            className={cn('absolute  flex gap-[320px] justify-center', {
              '-top-[25px]': isCardActive,
              '-top-[65px]': !isCardActive
            })}
          >
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="artist"
              cardTitle="artist"
              size="big"
              rotation={isCardActive ? 0 : 3}
            />
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="school"
              cardTitle="school"
              size="big"
              rotation={isCardActive ? 0 : -3}
            />
          </div>
          <div className="absolute -top-[40px] flex gap-[340px] justify-center">
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="artist"
              cardTitle="artist"
              size="big"
              rotation={isCardActive ? 0 : -3}
            />
            <Card
              screenSize={props.screenSize}
              img="home-school"
              key="school"
              cardTitle="school"
              size="big"
              rotation={isCardActive ? 0 : 3}
            />
          </div>
          <div className="absolute -top-[55px] flex gap-[380px] justify-center">
            <Card
              screenSize={props.screenSize}
              img="home-artist"
              altImg="home-artist-alt"
              key="artist"
              size="big"
              cardTitle="artiste"
              active={isCardActive}
              isNothingHovered={isCardActive}
              isHovered={isCardActive}
            />
            <Card
              screenSize={props.screenSize}
              img="home-school"
              altImg="home-school-alt"
              key="school"
              size="big"
              cardTitle="école"
              active={isCardActive}
              isNothingHovered={isCardActive}
              isHovered={isCardActive}
            />
          </div>
        </section>
      )}
    </div>
  );
}
