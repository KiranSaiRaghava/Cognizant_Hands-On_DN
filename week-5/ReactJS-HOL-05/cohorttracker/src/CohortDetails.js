import React from 'react';
// 1. Import the CSS module layout styles
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    // 2. Write logic to dynamically switch font colors based on currentStatus
    const isOngoing = props.cohort.currentStatus.toLowerCase() === 'ongoing';
    const headerColor = isOngoing ? 'green' : 'blue';

    return (
        /* 3. Apply the .box CSS Module class wrapper */
        <div className={styles.box}>
            
            {/* 4. Bind the inline color calculation to the h3 tag style property */}
            <h3 style={{ color: headerColor }}>
                {props.cohort.cohortCode} - <span>{props.cohort.technology}</span>
            </h3>
            
            <dl>
                <dt>Started On</dt>
                <dd>{props.cohort.startDate}</dd>
                
                <dt>Current Status</dt>
                <dd>{props.cohort.currentStatus}</dd>
                
                <dt>Coach</dt>
                <dd>{props.cohort.coachName}</dd>
                
                <dt>Trainer</dt>
                <dd>{props.cohort.trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;