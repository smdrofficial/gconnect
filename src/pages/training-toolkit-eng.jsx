import React, { useCallback } from "react";

// components
import Layout from "@components/Layout";

import Table from "@components/BasicTable";

// assets
import pageData from "@data/trainingToolkitDataEng.json";

// constants
const seoContent = {
  title: "Training Modules",
};

const TrainingToolkitEng = () => {
  const cellTemplate = useCallback((cellValue, column) => {
    if (["video", "ppt"].indexOf(column.field) !== -1) {
      if (cellValue && cellValue.value) {
        return (
          <a href={cellValue.value} rel="noreferrer noopener" target="_blank">
            {cellValue.label || "Document"}
          </a>
        );
      }
      if (column.field === "video") return "Comming Soon";
      return "";
    }
    if (["material"].indexOf(column.field) !== -1) {
      if (
        cellValue &&
        Array.isArray(cellValue.values) &&
        Array.isArray(cellValue.labels)
      ) {
        if (cellValue.values.length === 1) {
          if (cellValue.values[0])
            return (
              <a
                href={cellValue.values[0]}
                rel="noreferrer noopener"
                target="_blank"
              >
                {cellValue.labels[0] || "Document"}
              </a>
            );
          return "";
        }

        return cellValue.values.map((value, index) => {
          if (value)
            return (
              <li key={value}>
                <a href={value} rel="noreferrer noopener" target="_blank">
                  {cellValue.labels[index] || "Document"}
                </a>
              </li>
            );
          return "";
        });
      }
      return "";
    }

    return cellValue || "";
  }, []);

  return (
    <Layout seoContent={seoContent}>
      <div className="text-container-section">
        <div className="main-text-content pb-3">
          <div className="text-contents-g-connect fw-bolder">
            Train Yourself:
          </div>
          <div className="text-contents-g-connect">
            - Train Yourself to conduct basic Heartfulness sessions and take it
            further with focused sessions to deepen the understanding of
            Heartfulness.
          </div>
          <div className="text-contents-g-connect">
            - Select other topics from this section to interact with the
            participants and help them to understand how the elements of the
            Heartfulness practice are linked to their daily lives.
          </div>
          <div className="text-contents-g-connect pb-4">
            - Each topic has an MP4 video for volunteers to view and understand
            the flow of the content that is to be covered in a session.
          </div>
          <div className="text-contents-g-connect">
            The content available is categorised into:
          </div>
          <div className="text-contents-g-connect">
            1. Heartfulness Modules (These sessions are for the basic 3-day
            Heartfulness Programme)
          </div>
          <div className="text-contents-g-connect">
            2. Fundamentals of Performance
          </div>
          <div className="text-contents-g-connect">3. Life Skills</div>
        </div>
      </div>

      <div className="text-container-section">
        <div className="main-text-content pb-3">
          <div className="text-contents-g-connect fw-bolder">How to Use:</div>
          <div className="text-contents-g-connect">
            - Download the PowerPoint to run the session.
          </div>
          <div className="text-contents-g-connect">
            - Listen to the training video and familiarise yourself with the
            content, practice with a few volunteers
          </div>
          <div className="text-contents-g-connect">
            - Conduct sessions accompanying an experienced facilitator who can
            give you feedback. Where available, supplementary material is also
            provided for each topic.
          </div>
        </div>
      </div>

      <div className="text-container-section">
        <div className="main-text-content">
          <div className="text-contents-g-connect">
            <span className="fw-bolder">You Can Contribute:</span>&nbsp; Help us
            make this content repository larger and richer, translate to other
            languages, animate the content video, provide a voice and much more.
            If you would like to participate, please reach out to:&nbsp;
            <span className="fw-bold">You Can Contribute:</span>
          </div>
        </div>
      </div>

      <Table data={pageData.hfnModules} template={cellTemplate} />

      <Table data={pageData.performanceModules} template={cellTemplate} />

      <Table data={pageData.lifeSkillModules} template={cellTemplate} />

      <div className="text-contents-g-connect text-container-section">
        <div className="main-text-content pb-3 text-start">
          Self-Training Modules For Heartfulness G-connect Trainer
        </div>
      </div>
    </Layout>
  );
};

export default TrainingToolkitEng;
