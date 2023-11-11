import '../App.css';
import StudyGroupCard from "../ui-components/StudygroupCard"
import AnnoucementCard from "../ui-components/AnnouncementCard"
import CommentCard from "../ui-components/CommentCard"
import NavBarHeader from "../ui-components/NavBarHeader"


function StudyGroups(props){
    const { studyGroupCard, overrides, groupOwner } = props;
    const defaultGroupOwner = "hello";
    return (
        <div className="StudyGroup">
            <NavBarHeader style={{marginBottom: '16px'}}/>
            <StudyGroupCard />
            <div style={{ borderBottom: '2px dashed #000', width: '100%', margin: '8px 0' }}></div>
            <AnnoucementCard style={{ padding: '10px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <CommentCard style={{ margin: '5px' }} />
                <CommentCard style={{ margin: '5px' }} />
            </div>
        </div>
    );
}

// .dashed-line-container {
//     width: 100%;
//     height: 2px; /* Adjust the height of your dashed line */
//     position: relative;
//   }
  
//   .dashed-line {
//     border-bottom: 2px dashed #000; /* Adjust the color of your dashed line */
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }
  
export default StudyGroups;