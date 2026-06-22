import svgPaths from "./svg-vph5usz7w5";
import imgHeroSectionMascotImage from "./21b3b62def6a3ca793e241c541cc997ca6bac1a9.png";
import imgCtaSectionMascotImage from "./46f82959d732dd9735ecc2e7fbc3b3230d8b955e.png";

function HeroSectionContentBlock() {
  return (
    <div className="absolute bg-[#fcc12e] content-stretch flex items-center justify-center left-[658px] p-[20px] rounded-[24px] top-[102px]" data-name="HeroSection.ContentBlock">
      <p className="[word-break:break-word] font-['Bad_Script:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] whitespace-nowrap">...aле конструктивно!</p>
    </div>
  );
}

function HeroSectionAvatarStack() {
  return (
    <div className="bg-[#efe8e4] content-stretch flex items-center justify-center p-[12px] relative rounded-[9999px] shrink-0" data-name="HeroSection.AvatarStack">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#070708] text-[16px] uppercase whitespace-nowrap">Цього літа</p>
    </div>
  );
}

function HeroSectionReviewBubble() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="HeroSection.ReviewBubble">
      <HeroSectionAvatarStack />
      <div className="[word-break:break-word] font-['Unbounded:Black',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#070708] text-[52px] w-[min-content]">
        <p className="leading-[60px] mb-0">Пан Піксель</p>
        <p className="leading-[60px]">рознесе ваш дизайн</p>
      </div>
    </div>
  );
}

function HeroSectionSocialProofRow() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="HeroSection.SocialProofRow">
      <HeroSectionReviewBubble />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#070708] text-[18px] w-full">
        <span className="leading-[28px]">{`Завантажте скріншот інтерфейсу й `}</span>
        <span className="font-['Space_Grotesk:Bold',sans-serif] leading-[28px]">{`отримайте рев'ю від Пана Пікселя`}</span>
        <span className="leading-[28px]">{` який не боїться сказати, що кнопка загубилася, відступи посварилися між собою, а користувач уже шукає вихід.`}</span>
      </p>
    </div>
  );
}

function HeroSectionActionRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="HeroSection.ActionRow">
      <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[320px]" data-name="EmailInput">
        <div aria-hidden className="absolute border-2 border-[#efe8e4] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#838386] text-[18px] whitespace-nowrap">Email</p>
      </div>
      <div className="bg-[#070708] content-stretch flex items-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="SubmitButton">
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Покличте мене</p>
      </div>
    </div>
  );
}

function HeroSectionHeadlineGroup() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-[99px] top-[calc(50%-0.5px)] w-[624px]" data-name="HeroSection.HeadlineGroup">
      <HeroSectionSocialProofRow />
      <HeroSectionActionRow />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f9f5f3] border border-[#efe8e4] border-solid h-[660px] left-1/2 overflow-clip rounded-[40px] top-[calc(50%-1219px)] w-[1400px]" data-name="HeroSection">
      <div className="-translate-y-1/2 absolute left-[770px] size-[529px] top-[calc(50%+16.5px)]" data-name="HeroSection.MascotImage">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroSectionMascotImage} />
      </div>
      <HeroSectionContentBlock />
      <HeroSectionHeadlineGroup />
    </div>
  );
}

function ReviewPreviewSection() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f9f5f3] left-1/2 rounded-[40px] top-[calc(50%+81px)]" data-name="ReviewPreviewSection">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip px-[556px] py-[316px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#070708] text-[18px] whitespace-nowrap">тут буде якийсь приклад аналізу</p>
      </div>
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function StepCardStepNumberBadge() {
  return (
    <div className="bg-[#fcc12e] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[52px]" data-name="StepCard.StepNumberBadge">
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function StepCard() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="StepCard">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[32px] relative size-full">
          <StepCardStepNumberBadge />
          <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] text-center w-[278px]">Завантажте скріншот інтерфейсу у форматі JPG або PNG</p>
        </div>
      </div>
    </div>
  );
}

function StepCard2StepNumberBadge() {
  return (
    <div className="bg-[#fcc12e] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[52px]" data-name="StepCard--2.StepNumberBadge">
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function StepCard1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="StepCard--2">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[32px] relative size-full">
          <StepCard2StepNumberBadge />
          <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] text-center w-[278px]">Дайте Пану Пікселю подумати</p>
        </div>
      </div>
    </div>
  );
}

function StepCard3StepNumberBadge() {
  return (
    <div className="bg-[#fcc12e] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[52px]" data-name="StepCard--3.StepNumberBadge">
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function StepCard3TextGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#070708] text-center w-full" data-name="StepCard--3.TextGroup">
      <p className="font-['Space_Grotesk:Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] w-full">Отримайте вердикт</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[28px] relative shrink-0 text-[18px] w-full">... і кілька приводів відкрити Figma.</p>
    </div>
  );
}

function StepCard2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[20px] self-stretch" data-name="StepCard--3">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center p-[32px] relative size-full">
          <StepCard3StepNumberBadge />
          <StepCard3TextGroup />
        </div>
      </div>
    </div>
  );
}

function HowItWorksSectionStepList() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="HowItWorksSection.StepList">
      <StepCard />
      <StepCard1 />
      <StepCard2 />
      <div className="absolute h-0 left-[279px] top-[58px] w-[235px]" data-name="HowItWorksSection.ConnectorArrow--1">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 2">
            <line id="HowItWorksSection.ConnectorArrow--1" stroke="var(--stroke-0, #EFE8E4)" strokeDasharray="6 6" strokeWidth="2" x2="235" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[686px] top-[58px] w-[235px]" data-name="HowItWorksSection.ConnectorArrow--2">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 235 2">
            <line id="HowItWorksSection.ConnectorArrow--1" stroke="var(--stroke-0, #EFE8E4)" strokeDasharray="6 6" strokeWidth="2" x2="235" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[52px] items-center left-[110px] top-[850px] w-[1200px]" data-name="HowItWorksSection">
      <div className="[word-break:break-word] font-['Unbounded:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[#070708] text-[40px] text-center w-[640px]">
        <p className="leading-[52px] mb-0">Три кроки</p>
        <p className="leading-[52px]">до конструктивного розносу</p>
      </div>
      <HowItWorksSectionStepList />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#f9f5f3] relative rounded-[20px] shrink-0 w-full" data-name="FaqItem--1">
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start not-italic px-[40px] py-[32px] relative size-full text-[#070708]">
        <p className="font-['Space_Grotesk:Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">Чи мій дизайн у безпеці?</p>
        <div className="font-['Space_Grotesk:Regular',sans-serif] leading-[0] relative shrink-0 text-[18px] w-full">
          <p className="leading-[28px] mb-0">Так.</p>
          <p className="leading-[28px] mb-0">Я подивлюсь, проаналізую і забуду. Файли та результати не зберігаються.</p>
          <p className="leading-[28px]">Твій клієнт не дізнається, що перед релізом ти вирішив порадитися ще з кимось. Це між нами.</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="FaqItem--2">
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[40px] py-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#070708] text-[20px] w-full">Як почати?</p>
      </div>
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="FaqItem--3">
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[40px] py-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#070708] text-[20px] w-full">Які дизайни підходять найкраще?</p>
      </div>
    </div>
  );
}

function FaqSectionAccordionList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="FaqSection.AccordionList">
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
    </div>
  );
}

function FaqSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[52px] items-center left-1/2 top-[2150px] w-[800px]" data-name="FaqSection">
      <p className="[word-break:break-word] font-['Unbounded:Black',sans-serif] leading-[52px] not-italic relative shrink-0 text-[#070708] text-[40px] text-center w-[640px]">
        Ти питаєш,
        <br aria-hidden />
        ми відповідаємо!
      </p>
      <FaqSectionAccordionList />
    </div>
  );
}

function NavbarLogo() {
  return (
    <div className="h-[38px] relative shrink-0 w-[122px]" data-name="Navbar.Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 38">
        <g clipPath="url(#clip0_1_3033)" id="Navbar.Logo">
          <g id="PanPixel">
            <path d={svgPaths.p251b6580} fill="var(--fill-0, #070708)" id="Vector" />
            <path d={svgPaths.p1d75d500} fill="var(--fill-0, #070708)" id="Vector_2" />
            <path d={svgPaths.p185fad40} fill="var(--fill-0, #070708)" id="Vector_3" />
            <path d={svgPaths.p14beb000} fill="var(--fill-0, #070708)" id="Vector_4" />
            <path d={svgPaths.p7c358d0} fill="var(--fill-0, #070708)" id="Vector_5" />
            <path d={svgPaths.p3bf78280} fill="var(--fill-0, #070708)" id="Vector_6" />
            <path d={svgPaths.p1629be00} fill="var(--fill-0, #070708)" id="Vector_7" />
            <path d={svgPaths.p2bdec200} fill="var(--fill-0, #070708)" id="Vector_8" />
          </g>
          <path d={svgPaths.p26263500} id="Vector 1" stroke="var(--stroke-0, #FCC12E)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3033">
            <rect fill="white" height="38" width="122" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center justify-center left-1/2 py-[24px] top-0 w-[1440px]" data-name="Navbar">
      <NavbarLogo />
    </div>
  );
}

function CtaSectionInputRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="CtaSection.InputRow">
      <div className="bg-white content-stretch flex items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[320px]" data-name="EmailInput">
        <div aria-hidden className="absolute border-2 border-[#efe8e4] border-solid inset-[-2px] pointer-events-none rounded-[14px]" />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#838386] text-[18px] whitespace-nowrap">Email</p>
      </div>
      <div className="bg-[#070708] content-stretch flex items-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="SubmitButton">
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Я в справі!</p>
      </div>
    </div>
  );
}

function CtaSectionContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[526px]" data-name="CtaSection.ContentBlock">
      <div className="[word-break:break-word] font-['Unbounded:Black',sans-serif] leading-[0] not-italic relative shrink-0 text-[#070708] text-[40px] whitespace-nowrap">
        <p className="leading-[52px] mb-0">Дізнайся, що</p>
        <p className="leading-[52px] mb-0">Пан Піксель скаже</p>
        <p className="leading-[52px]">про твій дизайн</p>
      </div>
      <CtaSectionInputRow />
    </div>
  );
}

function CtaSectionMascotSpeechBubble() {
  return (
    <div className="absolute bg-[#f9f5f3] content-stretch flex items-center justify-center left-[759px] p-[20px] rounded-[24px] top-[106px]" data-name="CtaSection.MascotSpeechBubble">
      <p className="[word-break:break-word] font-['Bad_Script:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#070708] text-[24px] w-[203px]">У мене є підозри щодо твоїх відступів...</p>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fcc12e] h-[400px] left-1/2 rounded-[40px] top-[2838px] w-[1200px]" data-name="CtaSection">
      <div className="content-stretch flex items-center overflow-clip px-[60px] py-[80px] relative rounded-[inherit] size-full">
        <CtaSectionContentBlock />
        <CtaSectionMascotSpeechBubble />
        <div className="absolute flex items-center justify-center left-[794px] size-[513.42px] top-[121px]">
          <div className="flex-none rotate-[-14.81deg]">
            <div className="relative size-[420px]" data-name="CtaSection.MascotImage">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCtaSectionMascotImage} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="LandingPage">
      <HeroSection />
      <ReviewPreviewSection />
      <HowItWorksSection />
      <FaqSection />
      <Navbar />
      <CtaSection />
    </div>
  );
}