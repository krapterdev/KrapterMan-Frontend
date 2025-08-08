import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import WorkspaceHeader from "./WorkspaceHeader";
import CollectionsPanel from "./CollectionsPanel";
import MainContent from "./MainContent";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex flex-col border-1">
        {/* <Header /> */}

        <div className="flex flex-1 overflow-hidden">
          <SideBar />
          {/* <div className="flex flex-col flex-1 overflow-hidden">
            <WorkspaceHeader />
            <div className="flex flex-1 overflow-hidden">
              <CollectionsPanel />
              <MainContent />
            </div>
          </div> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
