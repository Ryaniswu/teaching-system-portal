import React from "react";
import SelectSubject from "../../teaching_management/score_management/inputscore/selectsubject";
import InitialList from "./datalist";

// let data=[];
class ReceiveAndDownData extends React.Component{
    render(){
        return <div>
            <SelectSubject />
            <br/>
            <InitialList />
        </div>
    }
}
export default ReceiveAndDownData;