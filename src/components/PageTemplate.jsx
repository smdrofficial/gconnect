import React, { useCallback } from "react";

import PropTypes from "prop-types";

// components
import Layout from "@component/Layout";

import Table from "@component/BasicTable";

const DynamicPage = ({
  pageContext: {
    pageData: { seoContent, textContent, tableContent },
  },
}) => {
  const cellTemplate = useCallback((cellValue, column) => {
    if (["document"].indexOf(column.field) !== -1) {
      if (cellValue && cellValue.value) {
        return (
          <a href={cellValue.value} rel="noreferrer noopener" target="_blank">
            {cellValue.label || "Document"}
          </a>
        );
      }
      return "";
    }

    return cellValue || "";
  }, []);

  return (
    <Layout seoContent={seoContent}>
      {textContent.header ? (
        <div className="container text-center pt-2">
          <h2> {textContent.header} </h2>
        </div>
      ) : null}
      <div className="container-section">
        <div className="main-text-content">
          <p>{textContent.paragraph || ""}</p>
        </div>
      </div>
      {tableContent ? (
        <Table data={tableContent} template={cellTemplate} />
      ) : null}
    </Layout>
  );
};

DynamicPage.propTypes = {
  pageContext: PropTypes.shape({
    pageData: PropTypes.shape({
      seoContent: PropTypes.exact({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
      textContent: PropTypes.shape({
        header: PropTypes.string,
        paragraph: PropTypes.string,
      }).isRequired,
      tableContent: PropTypes.exact({
        columns: PropTypes.arrayOf(
          PropTypes.exact({
            field: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
          })
        ).isRequired,
        rows: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            document: PropTypes.exact({
              label: PropTypes.string,
              value: PropTypes.string.isRequired,
            }),
          })
        ).isRequired,
      }),
    }).isRequired,
  }).isRequired,
};

export default DynamicPage;
