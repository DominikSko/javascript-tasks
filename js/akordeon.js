const accordionBody = document.querySelector('.accordion-body');
const articles = accordionBody.querySelectorAll('article');
const articleChildDiv = accordionBody.querySelectorAll('article > div:first-child');

const changeActiveState = (eventTarget, eventType) => {
  const expandAccordion = () => {
    eventTarget.forEach((target, index) => {
      target.addEventListener(eventType, () => {
        if (!articleChildDiv[index].className.includes('article-active')) foldAccordion();

        articleChildDiv[index].classList.toggle('article-active');
        articleHeaderText[index].classList.toggle('active-header');
        headerIconBg[index].classList.toggle('iconBG-active');
        headerIconSvg[index].classList.toggle('iconSVG-active');
        articleContent[index].classList.toggle('article-content-active');
      });
    });
  };

  const foldAccordion = () => {
    articles.forEach((article, index) => {
      articleChildDiv[index].classList.remove('article-active');
      articleHeaderText[index].classList.remove('active-header');
      headerIconBg[index].classList.remove('iconBG-active');
      headerIconSvg[index].classList.remove('iconSVG-active');
      articleContent[index].classList.remove('article-content-active');
    });
  };

  foldAccordion();
  expandAccordion();
};

//This loop creates fake news in every article
articleChildDiv.forEach(childDiv => {
  childDiv.innerHTML += `
    <div class="article-content">
            <div class="pl-8 pr-8 pb-5 text-grey-darkest">
            <ul class="pl-4">
                <li class="pb-2">
                consectetur adipiscing elit
                </li>
                <li class="pb-2">
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </li>
                <li class="pb-2">
                Viverra orci sagittis eu volutpat odio facilisis mauris
                </li>
            </ul>
        </div>
    </div>
    `;
});

const articleHeaderText = accordionBody.querySelectorAll('header span');
const headerIconBg = accordionBody.querySelectorAll('header div');
const headerIconSvg = accordionBody.querySelectorAll('header div svg');
const articleContent = accordionBody.querySelectorAll('.article-content');

changeActiveState(headerIconBg, 'click');
changeActiveState(articleHeaderText, 'dblclick');
