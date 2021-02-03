

import styled from 'styled-components';
import WorkLarge from './WorkLarge';
import WorkSmall from './WorkSmall';
import PROJECTS from './data.js';
import Contact from './Contact';


const Work = (props) => {
    return (
        <div>
            <WorkLarge data={PROJECTS.projectsList.filter((item) => item.category === 'large')} />
            <WorkSmall data={PROJECTS.projectsList.filter((item) => item.category === 'small')} />
        </div>
    );
}
export default Work;