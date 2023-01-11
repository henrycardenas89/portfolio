import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 max-w-5xl w-11/12 mx-auto">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.map((item, i) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
