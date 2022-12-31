import React from 'react';
import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer } from "@react-sigma/core";

function SimpleGraph() {
  // グラフ生成
  const graph = new MultiDirectedGraph();
  // ノード追加
  graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
  graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
  // エッジ追加
  graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });

  return (
    <div className="SimpleGraph">
      <h1>単純なグラフ</h1>
      <SigmaContainer style={{ height: "500px" }} graph={graph}></SigmaContainer>
    </div>
  );
}

export default SimpleGraph;