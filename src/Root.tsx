import React from "react";
import { Composition } from "remotion";
import { FontTest } from "./FontTest";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FontTest"
        component={FontTest}
        durationInFrames={90}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
