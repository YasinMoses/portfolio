"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date} // Assuming each experience data item has a 'date' property
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} // You can customize icon style
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
