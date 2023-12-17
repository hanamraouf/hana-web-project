import Spline from "@splinetool/react-spline";
import { useCallback, useEffect } from "react";

const StartPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-gray1-200 w-full h-[6144px] overflow-hidden m-auto">
      <section className="w-[96vw] h-[1969px] overflow-hidden flex flex-col items-center justify-center gap-[129px] text-center text-[40px] text-primary-white-100 font-noto-sans-egyptian-hieroglyphs m-auto">
        <div className="w-[90vw] h-[52px] overflow-hidden  flex flex-col items-center justify-center">
          <div className="w-[100%] h-[49px] overflow-hidden shrink-0 flex flex-row items-center justify-between">
            <div className="w-[30vw] items-start">
              <h2 className=" w-fit m-0 relative text-inherit leading-[24px] font-normal font-inherit">
                𓅓
              </h2>
            </div>
            <nav className="m-0 w-[50vw] flex flex-row items-start  text-right text-xl text-primary-white-100 font-Trade-Gothic-LT-Extended">
              <div className=" flex flex-row justify-between w-[50%]">
                <div className="relative leading-[24px] flex items-center w-[71px] h-[25px] shrink-0">
                  Home
                </div>
                <div className="relative leading-[24px]">Learning Path</div>
                <div className="relative leading-[24px]">Community</div>
              </div>
            </nav>
          </div>
        </div>
        <div className="w-[1154px] overflow-hidden flex flex-col items-center justify-center gap-[558px] text-left text-77xl">
          <div className="relative w-[787px] h-[353px] overflow-hidden shrink-0">
            <div className="absolute top-[54px] left-[0px] w-[716px] h-[299px] overflow-hidden">
              <div className="absolute top-[4px] left-[218px] w-[133px] h-[295px] overflow-hidden flex flex-col items-center justify-start">
                <h1 className="m-0 relative text-inherit font-normal font-inherit opacity-[0.35]">
                  𓉐
                </h1>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[716px] h-[299px] overflow-hidden text-109xl text-whitesmoke-200">
                <div className="absolute top-[0px] left-[171px] w-[193px] h-[299px] overflow-hidden flex flex-col items-center justify-start">
                  <h1 className="m-0 relative text-inherit font-normal font-inherit opacity-[0.35]">
                    𓆑
                  </h1>
                </div>
                <div className="absolute top-[8px] left-[0px] w-[716px] h-[291px] overflow-hidden">
                  <h1 className="m-0 absolute top-[80px] left-[0px] text-inherit font-normal font-inherit opacity-[0.35]">
                    𓎡
                  </h1>
                  <div className="absolute top-[0px] left-[52px] w-[664px] h-[291px] overflow-hidden flex flex-row items-center justify-start">
                    <div className="w-[148px] h-[291px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                      <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[148px] h-[217px] shrink-0 opacity-[0.35]">
                        𓅓
                      </h1>
                    </div>
                    <div className="w-[598px] h-[211px] overflow-hidden shrink-0 flex flex-col items-end justify-end ml-[-82px] text-gainsboro-400 font-Trade-Gothic-LT-Extended">
                      <div className="w-[598px] h-[211px] overflow-hidden shrink-0 flex flex-col items-center justify-end py-[38px] px-0 box-border">
                        <h1 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block w-[598px] h-[86px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                          LINGRA
                        </h1>
                      </div>
                      <div className="w-[587px] h-[42px] overflow-hidden shrink-0 flex flex-col items-center justify-start mt-[-42px] text-start text-[24px]">
                        <div className="relative leading-[24px] inline-block w-[587px] h-4 shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">{`Reviving the Ancient Egyptian Language. `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[323px] w-[464px] h-[353px] overflow-hidden flex flex-row items-center justify-start text-whitesmoke-200">
              <div className="w-[336px] h-[353px] overflow-hidden shrink-0 flex flex-row items-end justify-start">
                <div className="w-[180px] h-[329px] overflow-hidden shrink-0 flex flex-row items-end justify-start">
                  <div className="w-[152px] h-[257px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                    <h1 className="m-0 relative text-inherit font-normal font-inherit opacity-[0.35]">
                      𓂧
                    </h1>
                  </div>
                  <div className="w-[148px] h-[329px] overflow-hidden shrink-0 flex flex-col items-center justify-start ml-[-120px] text-gainsboro-100">
                    <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[148px] h-[217px] shrink-0 opacity-[0.35]">
                      𓆃
                    </h1>
                  </div>
                </div>
                <div className="w-[190px] h-[353px] overflow-hidden shrink-0 flex flex-row items-center justify-start ml-[-34px] text-109xl text-gainsboro-300">
                  <div className="w-[148px] h-[353px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                    <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[148px] h-[217px] shrink-0 opacity-[0.35]">
                      𓈖
                    </h1>
                  </div>
                  <div className="w-[148px] h-[292px] overflow-hidden shrink-0 flex flex-col items-center justify-start ml-[-106px] text-whitesmoke-100">
                    <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[148px] h-[217px] shrink-0 opacity-[0.35]">
                      𓆓
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[148px] h-[323px] overflow-hidden shrink-0 flex flex-row items-center justify-end ml-[-20px] text-109xl text-gray1-100">
                <div className="w-[148px] h-[323px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                  <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[148px] h-[217px] shrink-0 opacity-[0.35]">
                    𓐍
                  </h1>
                </div>
                <div className="w-[69px] h-[196px] overflow-hidden shrink-0 flex flex-col items-start justify-end ml-[-79px] text-77xl text-primary-white-100">
                  <h1 className="m-0 relative text-inherit font-normal font-inherit opacity-[0.35]">
                    𓎛
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[250px] text-55xl text-gainsboro-400 font-Trade-Gothic-LT-Extended">
            <div
              className="self-stretch relative h-[91px] overflow-hidden shrink-0 [&.animate]:animate-[1s_ease-in_0.5s_1_normal_forwards_slide-in-left] opacity-[0] cursor-pointer"
              data-scroll-to="frameContainer"
              onClick={onFrameContainerClick}
              data-animate-on-scroll
            >
              <div className="absolute top-[-56px] left-[0px] w-[741px] h-[203px] overflow-hidden flex flex-col items-center justify-end">
                <h1 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block w-[741px] h-[113px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
                  LEARNING PATH
                </h1>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[205px]">
              <div className="self-stretch h-[89px] overflow-hidden shrink-0 flex flex-col items-end justify-end">
                <h1
                  className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block w-[652px] h-[68px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [&.animate]:animate-[1s_ease_1s_1_normal_forwards_slide-in-right] opacity-[0]"
                  data-animate-on-scroll
                >
                  EASY ACCESS
                </h1>
              </div>
              <div className="self-stretch h-[90px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <h1
                  className="m-0 relative text-inherit leading-[24px] font-normal font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [&.animate]:animate-[1s_ease_1.5s_1_normal_forwards_slide-in-left] opacity-[0]"
                  data-animate-on-scroll
                >
                  COMMUNITY
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-[2190px] left-[-161px] w-[96vw] overflow-hidden flex flex-col items-center justify-center gap-[50px] text-right text-45xl text-gainsboro-200 font-tradegothic-lt-extended m-auto">
        <div className="self-stretch h-[1176px] overflow-hidden shrink-0 flex flex-col items-center justify-start text-[92px]">
          <div className="w-[1762px] h-[1004px] overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="w-[1762px] h-[905px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="w-[735px] h-[850px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[689px] h-[850px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                  <img
                    className="relative rounded-xl w-[689px] h-[356px] object-cover [&.animate]:animate-[4s_ease_4.5s_1_normal_forwards_slide-in-left] opacity-[0]"
                    alt=""
                    src="/wanisagainstinscriptions-15@2x.png"
                    data-animate-on-scroll
                  />
                </div>
                <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[625px] h-[708px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-579px]">
                  <img
                    className="relative rounded-xl w-[625px] h-[323px] object-cover opacity-[0.6] [&.animate]:animate-[3s_ease_3.5s_1_normal_forwards_slide-in-left]"
                    alt=""
                    src="/wanisagainstinscriptions-14@2x.png"
                    data-animate-on-scroll
                  />
                </div>
              </div>
              <div className="w-[1369px] h-[1020px] overflow-hidden shrink-0 flex flex-row items-start justify-start ml-[-531px]">
                <div className="w-[925px] h-[566px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <div className="w-[736px] h-[566px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                    <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[625px] h-[566px] overflow-hidden shrink-0 flex flex-col items-center justify-end opacity-[0.55]">
                      <img
                        className="relative rounded-xl w-[625px] h-[324px] object-cover opacity-[0.4] [&.animate]:animate-[2s_ease_2.5s_1_normal_forwards_slide-in-left]"
                        alt=""
                        src="/wanisagainstinscriptions-13@2x.png"
                        data-animate-on-scroll
                      />
                    </div>
                    <div
                      className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[625px] h-[426px] overflow-hidden shrink-0 flex flex-col items-center justify-end [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] ml-[-514px]"
                      data-animate-on-scroll
                    >
                      <img
                        className="relative rounded-xl w-[625px] h-[323px] object-cover opacity-[0.2] [&.animate]:animate-[2s_ease_1s_1_normal_forwards_slide-in-left]"
                        alt=""
                        src="/wanisagainstinscriptions-12@2x.png"
                        data-animate-on-scroll
                      />
                    </div>
                  </div>
                  <img
                    className="relative rounded-xl w-[646px] h-[334px] object-cover opacity-[0.05] ml-[-457px]"
                    alt=""
                    src="/wanisagainstinscriptions-11@2x.png"
                  />
                </div>
                <div className="w-[833px] overflow-hidden shrink-0 flex flex-row items-start justify-end ml-[-419px]">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-end">
                    <div className="flex-1 h-[905px] overflow-hidden flex flex-col items-center justify-end">
                      <h1 className="m-0 relative text-inherit tracking-[0.51em] font-normal font-inherit inline-block w-[821px] h-[170px] shrink-0">
                        His Past
                      </h1>
                    </div>
                    <div className="flex-1 h-[751px] overflow-hidden flex flex-col items-center justify-end ml-[-769px] text-left text-77xl">
                      <h1 className="m-0 relative text-inherit tracking-[0.58em] font-normal font-inherit inline-block w-[769px] h-[170px] shrink-0">
                        Deserts
                      </h1>
                    </div>
                  </div>
                  <div className="flex-1 h-[607px] overflow-hidden flex flex-row items-start justify-end ml-[-860px] text-left text-77xl">
                    <div className="w-[669px] h-[607px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                      <h1 className="m-0 relative text-inherit tracking-[2.25em] font-normal font-inherit inline-block w-[669px] h-[170px] shrink-0">
                        Who
                      </h1>
                    </div>
                    <div className="w-[545px] h-[440px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-545px] text-[90px]">
                      <h1 className="m-0 relative text-inherit tracking-[0.44em] font-normal font-inherit inline-block w-[501px] h-[169px] shrink-0">
                        Is He
                      </h1>
                    </div>
                    <div className="w-[545px] h-[265px] overflow-hidden shrink-0 flex flex-col items-center justify-end pt-0 px-0 pb-[17px] box-border ml-[-545px]">
                      <h1 className="m-0 relative text-inherit tracking-[1.02em] font-normal font-inherit inline-block w-[545px] h-[170px] shrink-0">
                        Lost
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[96vw] h-[126px] overflow-hidden shrink-0 flex flex-col items-center justify-center m-auto py-3 px-0 box-border text-center text-gainsboro-400">
          <h1 className="m-0 relative text-inherit leading-[24px] font-normal font-inherit inline-block w-[642px] h-[81px] shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            SPONSORED BY
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[302px] text-left text-primary-white-100">
          <div className="w-[1194px] overflow-hidden flex flex-col items-center justify-center gap-[51px]">
            <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
              <div className="self-stretch overflow-hidden flex flex-row items-center justify-between">
                <img
                  className="relative w-[330px] h-[170px] object-cover"
                  alt=""
                  src="Image_ekb.png"
                />
                <img
                  className="relative w-[377px] h-[66px] object-cover"
                  alt=""
                  src="/filmmydesign@2x.png"
                />
                <img
                  className="relative w-[300px] h-[138px] object-cover"
                  alt=""
                  src="Image_icc.png"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-end justify-center">
              <div className="self-stretch overflow-hidden flex flex-row items-end justify-between">
                <img
                  className="relative w-[235px] h-[213px] object-cover"
                  alt=""
                  src="/Image_dar.png"
                />
                <img
                  className="relative w-[854px] h-60 overflow-hidden shrink-0"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[96vw] self-stretch h-[1866px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[748px]">
            <div className="w-[96vw] h-[458px] overflow-hidden shrink-0 flex flex-row items-center justify-center m-auto">
              <div className="w-[30vw] h-[422px] overflow-hidden shrink-0 flex flex-row items-start justify-end">
                <div className="w-[497px] h-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                  <img
                    className="relative rounded-mini w-[497px] h-[385px] object-cover opacity-[0.4]"
                    alt=""
                    src="/SmallLeft@2x.png"
                  />
                </div>
                <div className="w-[30vw] h-[340px] overflow-hidden shrink-0 flex flex-col items-center justify-end ml-[-451px]">
                  <h1 className="m-0 relative text-inherit  font-normal font-inherit inline-block w-[90%] h-[242px] shrink-0 tracking-[-0.14em]">
                    <p className="m-0">Remnants</p>
                    <p className="m-0">{`of these `}</p>
                    <p className="m-0">Ruins</p>
                  </h1>
                </div>
              </div>
              <div className="w-[999px] overflow-hidden shrink-0 flex flex-row items-start justify-start ml-[-134px] text-right">
                <img
                  className="relative rounded-mini w-[595px] h-[458px] object-cover"
                  alt=""
                  src="/CenterWanisPic@2x.png"
                />

                <div className="w-[30vw] h-[422px] overflow-hidden shrink-0 flex flex-row items-start justify-end ml-[-89px]">
                  <div className="w-[30vw] h-[422px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                    <img
                      className=" relative rounded-mini  h-[385px] object-cover opacity-[0.4]"
                      alt="LieonYourTongue"
                      src="/SmallLeft@2x.png"
                    />
                  </div>
                  <div className=" w-[305px] h-[340px] overflow-hidden shrink-0 flex flex-col items-center justify-center ml-[-329px]">
                    <h1 className="m-0 relative text-inherit  font-normal font-inherit inline-block w-[90%] h-[242px] shrink-0 tracking-[-0.14em] mr-[30px]">
                      <p className="m-0 text-left">Lie on</p>
                      <p className="m-0 text-left">{`Your `}</p>
                      <p className="m-0 text-left">Tongue</p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Spline scene="https://prod.spline.design/oUApipQvmnvbDzl0/scene.splinecode" />
            </div>
            <footer className="w-[1440px] overflow-hidden flex flex-col items-center justify-start gap-[300px] text-left text-3xl text-lightgray font-tradegothic-lt-extended">
              <div className="w-[238px] overflow-hidden flex flex-col items-start justify-center">
                <button
                  className="py-4 px-6 bg-[transparent] self-stretch rounded-13xl overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[4px] border-solid border-primary-white-100"
                  disabled={true}
                >
                  <img
                    className="flex-1 relative max-w-full overflow-hidden h-6 hidden"
                    alt=""
                    src="/container1.svg"
                  />
                  <div className="flex-1 relative text-base leading-[24px] font-tradegothic-lt-extended text-primary-white-100 text-center">
                    Start Your Adventure
                  </div>
                  <img
                    className="flex-1 relative max-w-full overflow-hidden h-6 hidden"
                    alt=""
                    src="/container1.svg"
                  />
                </button>
              </div>
              <div className="self-stretch bg-primary-black-100 h-[304px] flex flex-row items-start justify-between p-20 box-border">
                <div className="w-[293px] h-[145px] flex flex-col items-start justify-between">
                  <div className="self-stretch relative leading-[24px]">
                    Hana Raouf
                  </div>
                  <div className="w-[293px] flex flex-col items-start justify-start gap-[8px] text-xl text-gray-500">
                    <div className="self-stretch relative leading-[24px]">
                      ©2023 Hana Raouf
                    </div>
                    <div className="self-stretch relative leading-[24px] font-editors-note" />
                  </div>
                </div>
                <div className="w-[824px] flex flex-row items-start justify-start gap-[40px] text-primary-white-100">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch relative leading-[24px] text-dimgray flex items-center h-[25px] shrink-0">
                      Company
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      About
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Manifesto
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Promise
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch relative leading-[24px] text-dimgray flex items-center h-[25px] shrink-0">
                      Socials
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Figma
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Instagram
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Twitter
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px]">
                    <div className="self-stretch relative leading-[24px] text-dimgray">
                      Legal
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      License
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Privacy
                    </div>
                    <div className="self-stretch relative leading-[24px]">
                      Terms
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[16px] text-dimgray">
                    <div className="self-stretch relative leading-[24px]">
                      Help
                    </div>
                    <div className="self-stretch relative leading-[24px] text-primary-white-100">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartPage;
