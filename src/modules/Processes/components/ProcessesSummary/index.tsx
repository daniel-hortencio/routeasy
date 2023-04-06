"use client";

import { Box, Wrapper } from "../../../../shared/components/elements";
import { CardProcessesSummary } from "../CardProcessesSummary";

import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";

export default function ProcessesSummary() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 1.25,
      },
    },
    [
      // add plugins here
    ]
  );

  return (
    <Box className="justify-center pt-6 pb-12  bg-white">
      <Wrapper as="section">
        <Box className="hidden md:grid md:grid-cols-3 gap-8">
          <CardProcessesSummary label="Em monitoramento" data={100592} />
          <CardProcessesSummary
            label="Consultas realizadas"
            data={19437}
            filterDays={[30, 60, 90]}
          />
          <CardProcessesSummary
            label="Movimentações"
            data={286195}
            filterDays={[30, 60, 90]}
          />
        </Box>
      </Wrapper>

      <Box className="md:hidden">
        <div ref={sliderRef} className="keen-slider ProcessSummary_KeenSlider">
          <div className="keen-slider__slide px-4 cursor-grab">
            <CardProcessesSummary
              label="Consultas realizadas"
              data={19437}
              filterDays={[30, 60, 90]}
            />
          </div>

          <div className="keen-slider__slide pr-4 cursor-grab">
            <CardProcessesSummary label="Em monitoramento" data={100592} />
          </div>

          <div className="keen-slider__slide pr-4 cursor-grab">
            <CardProcessesSummary
              label="Movimentações"
              data={286195}
              filterDays={[30, 60, 90]}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}
