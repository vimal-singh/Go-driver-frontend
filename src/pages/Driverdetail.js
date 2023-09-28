import React from "react";
import Box from "@mui/material/Box";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import classes from "./driverdetail.module.css";

const Driverdetail = () => {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
      <TreeView aria-label="file system navigator">
        <TreeItem nodeId="1" label="KtXSAnNR5G" className={classes.treeitem}>
          <TreeItem nodeId="2" label="ACP" className={classes.treeitem} />
          <TreeItem
            nodeId="2"
            label="ChannelPower"
            className={classes.treeitem}
          />
          <TreeItem
            nodeId="2"
            label="ModulationAnalysis"
            className={classes.treeitem}
          />
        </TreeItem>
        <TreeItem nodeId="5" label="Documents" className={classes.treeitem}>
          <TreeItem nodeId="10" label="OSS" className={classes.treeitem} />
          <TreeItem nodeId="6" label="MUI" className={classes.treeitem} />
        </TreeItem>
        <TreeItem />
      </TreeView>
    </Box>
  );
};

export default Driverdetail;
