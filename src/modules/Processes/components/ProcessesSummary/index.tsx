"use client";

import { Box } from "../../../../shared/components/elements";
import { CardProcessesSummary } from "../CardProcessesSummary";

import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import { isServerSide } from "../../../../shared/hooks/isServerSide";

export default function ProcessesSummary() {
  const windowWidth = window?.innerWidth || undefined;

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

  console.log({ windowWidth });

  return (
    <>
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

      <Box className="md:hidden">
        <div ref={sliderRef} className="keen-slider ProcessSummary_KeenSlider">
          <div className="keen-slider__slide pr-4 cursor-grab">
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
    </>
  );
}
