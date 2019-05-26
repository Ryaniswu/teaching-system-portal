import React from 'react';
import InputRate from './inputrate';
import ScoreTable from './showscore';
import SelectSubject from '../inputscore/selectsubject';
class CalculateSumScore extends React.Component{
    render(){
        return  <div>
            <SelectSubject />
            <br/>
            <InputRate />
            <br />
            <ScoreTable />
        </div>
    }
}
export default CalculateSumScore;