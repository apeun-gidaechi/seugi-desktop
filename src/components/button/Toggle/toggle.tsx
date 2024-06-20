import React, { useState } from 'react';
import * as S from "@/components/Button/Toggle/toggle.style";

const Toggle = () => {
    const [latestSort, setLatestSort] = useState(true);

    const toggleHandler = () => {
        setLatestSort((prev) => !prev);

    } 


    return (
        <S.BtnWrapper>
            <S.CheckBox type='checkbox' id='toggleBtn' onChange={toggleHandler} checked={latestSort} />
            <S.ButtonLabel htmlFor='toggleBtn' latestSort={latestSort}>
                <S.ToggleIndicator latestSort={latestSort} />
            </S.ButtonLabel>
        </S.BtnWrapper>
    );
}

export default Toggle;
