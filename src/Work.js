
import WorkLarge from './WorkLarge';
import WorkSmall from './WorkSmall';
import PROJECTS from './data.js';


const Work = (props) => {
    return (
        <div>
            <WorkLarge data={PROJECTS.projectsList.filter((item) => item.category === 'large')} />
            <WorkSmall data={PROJECTS.projectsList.filter((item) => item.category === 'small')} />
        </div>
    );
}
export default Work;