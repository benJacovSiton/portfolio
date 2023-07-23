import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline  lineColor="#3e497a">

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Ort Jerusalem college For practical engineer</h3>
          <p> practical software engineer diploma</p>
          <p>Graduation certificate with honors</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Teacher at Ort College Jerusalem
          </h3>
          <p>For classes and private lessons</p>
          <p>Algorithm, data structure, object-oriented programming
            in C# Python and Java Script languages</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience