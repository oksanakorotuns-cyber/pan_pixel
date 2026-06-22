import svgPaths from "./svg-gc0z5n7rdu";

function NavbarLogo() {
  return (
    <div className="h-[38px] relative shrink-0 w-[122px]" data-name="Navbar.Logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 38">
        <g clipPath="url(#clip0_3_90)" id="Navbar.Logo">
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
          <clipPath id="clip0_3_90">
            <rect fill="white" height="38" width="122" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="relative shrink-0 w-[1440px]" data-name="Navbar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[24px] relative size-full">
        <NavbarLogo />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full text-[#070708]">
        <p className="font-['Unbounded:Black',sans-serif] font-black leading-[50.6px] relative shrink-0 text-[44px] whitespace-nowrap">Завантаж свій дизайн</p>
        <p className="font-['Arimo:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-center w-[619px]">
          <span className="font-['Space_Grotesk:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] leading-[28px] text-[18px]">{`Отримай швидкий аналіз інтерфейсу та `}</span>
          <span className="font-['Space_Grotesk:Bold','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-bold leading-[28px] text-[18px]">конкретні рекомендації</span>
          <span className="font-['Space_Grotesk:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] leading-[28px] text-[18px]">{` щодо покращення UI/UX від Пана Пікселя.`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d557600} id="Vector" stroke="var(--stroke-0, #070708)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17 8L12 3L7 8" id="Vector_2" stroke="var(--stroke-0, #070708)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 3V15" id="Vector_3" stroke="var(--stroke-0, #070708)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fcc12e] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#070708] text-[18px]">Перетягни скріншот сюди</p>
        <p className="font-['Space_Grotesk:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#838386] text-[16px]">{`або натисти, щоб орати файл `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[40px] shrink-0">
      <div aria-hidden className="absolute border border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#838386] text-[14px] whitespace-pre">
          <span className="leading-[21px]">{`PNG  `}</span>
          <span className="leading-[21px]">·</span>
          <span className="leading-[21px]">{`  JPG  `}</span>
          <span className="leading-[21px]">·</span>
          <span className="leading-[21px]">{`  JPEG`}</span>
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center relative size-full">
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center p-[40px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white min-h-[200px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center min-h-[inherit] overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container2 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#efe8e4] border-dashed inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#838386] text-[13px] whitespace-nowrap">
          <span className="font-['Space_Grotesk:Bold','Noto_Sans:Bold','Noto_Sans:Regular',sans-serif] font-bold leading-[19.5px] text-[#070708]">Контекст екрану</span>
          <span className="leading-[19.5px]">{` (необов’язково)`}</span>
        </p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[108px] relative rounded-[16px] shrink-0 w-[672px]" data-name="Text Area">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[18px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(7,7,8,0.5)] w-full">Що це за екран? Яка його головна ціль? На що варто звернути увагу під час аналізу?</p>
      </div>
      <div aria-hidden className="absolute border-2 border-[#efe8e4] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph />
        <TextArea />
      </div>
    </div>
  );
}

function UploadScreen() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-[672px]" data-name="UploadScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] relative size-full">
        <Container />
        <Container1 />
        <Container5 />
        <div className="bg-[#efe8e4] relative rounded-[12px] shrink-0" data-name="SubmitButton">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold','Noto_Sans:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#838386] text-[18px] whitespace-nowrap">Проаналізувати дизайн</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[856.333_0_0] min-h-px relative w-full" data-name="Main Content">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[52px] items-center pb-[52px] px-[16px] relative size-full">
          <Navbar />
          <UploadScreen />
        </div>
      </div>
    </div>
  );
}

function PageWrapper() {
  return (
    <div className="bg-[#f9f5f3] h-[931.333px] relative shrink-0 w-full" data-name="PageWrapper">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

export default function BuildMvpForAiDesignCritic() {
  return (
    <div className="bg-[#f9f5f3] content-stretch flex flex-col items-start relative size-full" data-name="Build MVP for AI Design Critic">
      <PageWrapper />
    </div>
  );
}