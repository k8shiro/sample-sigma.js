import React, { FC, useEffect } from "react";

import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";

const LoadGraphWithHook: FC = () => {
  const MyGraph: FC = () => {
    const loadGraph = useLoadGraph();

    useEffect(() => {
      // Create the graph
      const graph = new MultiDirectedGraph();
      graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
      graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
      graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
      loadGraph(graph);
    }, [loadGraph]);

    return null;
  };

  return (
    <div className="LoadGraphWithHook">
      <h1>useLoadGraphを使ったグラフ</h1>
      <SigmaContainer style={{ height: "500px" }}>
        <MyGraph />
      </SigmaContainer>
    </div>
  );
};

export default LoadGraphWithHook;