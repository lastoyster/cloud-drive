import React from 'react';
import FolderModal from './modals/folderModal';
import PlanModal from './modals/planModal';

const ModalProvider =()=>{
    return(
    <div className="fixed">
    <FolderModal/>
    <PlanModal/>
    </div>
    );
};

export default ModalProvider;