import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from "remotion";

// ✅ هذا المكون فقط لاختبار الخط العربي
export const FontTest: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const translateY = interpolate(frame, [0, 20], [40, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#1a1a2e",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      {/* اختبار 1: خط Cairo من Google */}
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          direction: "rtl",
          textAlign: "center",
          fontFamily: "'Cairo', sans-serif",
          fontSize: 80,
          fontWeight: 900,
          color: "#FFD700",
          textShadow: "0 4px 20px rgba(0,0,0,0.8)",
        }}
      >
        مرحباً بكم في قناتنا
      </div>

      {/* اختبار 2: جملة طويلة */}
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
          direction: "rtl",
          textAlign: "center",
          fontFamily: "'Cairo', sans-serif",
          fontSize: 55,
          fontWeight: 700,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          borderRadius: 16,
          padding: "16px 32px",
          maxWidth: "80%",
          lineHeight: 1.8,
        }}
      >
        الذكاء الاصطناعي يغير العالم في عام 2025
      </div>

      {/* اختبار 3: حروف منفصلة وكلمات صعبة */}
      <div
        style={{
          opacity,
          direction: "rtl",
          textAlign: "center",
          fontFamily: "'Cairo', sans-serif",
          fontSize: 50,
          fontWeight: 400,
          color: "#00ff88",
        }}
      >
        اشترك الآن 🔔 ولا تنسَ التفعيل
      </div>

      {/* اسم الخط المستخدم */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          fontFamily: "monospace",
          fontSize: 24,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Font: Cairo | Remotion v4
      </div>
    </AbsoluteFill>
  );
};
