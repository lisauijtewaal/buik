import React, { Component } from 'react';
import ResultListItem from "./ResultListItem/index";

class ResultList extends Component {
  render() {
    const resultsObjects = this.props.results;
    const results = Object.entries(resultsObjects).map(([type, result ]) => ({ type, ...result }));
    const sortedResults = results.sort((a, b) => {
      return a.score - b.score;
    });
    const filteredResults = sortedResults.slice(0, 3);

    return (
      <ul>
        {/* loop door results. type = sport, result = { score: 10, question: {uit steps-data} } */}
        {filteredResults.map((result, index) => {
          return (
            <ResultListItem
              score={result.score}
              index={index}
              question={result.question}
            />
          )
        })}
      </ul>
    )

  }
}

export default ResultList;
