import { IRegion } from "@common/entities";
import { Divider } from "antd";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

type PropTypes = {
  regions: string[];
};

const RegionListCarousel: FC<PropTypes> = ({ regions }) => {
  const [activeRegion, setActiveRegion] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    slides: { perView: 2 },
    breakpoints: {
      "(min-width: 620px)": {
        slides: { perView: 2 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3 },
      },
      "(min-width: 992px)": {
        slides: { perView: 4 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 6 },
      },
    },
  });

  const router = useRouter();
  const { name } = router.query;

  useEffect(() => {
    const regionIndex = regions.findIndex((x) => x == name);
    if (regionIndex > -1) setActiveRegion(regionIndex);
  }, []);

  useEffect(() => {
    const regionIndex = regions.findIndex((x) => x == name);
    if (regionIndex > -1) setActiveRegion(regionIndex);
  }, [router.asPath]);

  useEffect(() => {
    slider && slider.current?.moveToIdx(activeRegion);
  }, [activeRegion]);

  const renderCategoryList = () => {
    return regions.map((x, index) => {
      const isActiveCategory = index == activeRegion;
      const nextIsActive =
        regions.length === index + 1 || index + 1 == activeRegion;
      return (
        <div
          key={index}
          className={`keen-slider__slide item-category-list ${
            isActiveCategory ? "active" : ""
          }`}
          onClick={() => {
            router.push(`/region/${x}`);
          }}
        >
          <h5>{x}</h5>
          {!isActiveCategory && !nextIsActive && <Divider type="vertical" />}
        </div>
      );
    });
  };

  const onClickNext = () => {
    const newIndex = activeRegion + 1;
    if (newIndex >= regions.length) return;
    router.push(`/region/${regions[newIndex]}`);
  };
  const onClickBack = () => {
    const newIndex = activeRegion - 1;
    if (newIndex <= -1) return;
    router.push(`/region/${regions[newIndex]}`);
  };

  return (
    <div className="category-list-carousel-container">
      <div className="category-list-carousel">
        <button
          className={`btn-back-carousel ${
            activeRegion === 0 ? "btn-hidden" : ""
          }`}
          onClick={onClickBack}
        >
          <img
            className="filter_white"
            src="/images/arrow-left.png"
            width={16}
          ></img>
        </button>
        <div ref={sliderRef} className="keen-slider">
          {renderCategoryList()}
        </div>
        <button
          className={`btn-next-carousel ${
            activeRegion === regions.length - 1 ? "btn-hidden" : ""
          }`}
          onClick={onClickNext}
        >
          <img
            className="filter_white"
            src="/images/arrow-right.png"
            width={16}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default RegionListCarousel;
