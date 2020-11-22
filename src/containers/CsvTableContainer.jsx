import React from "react";
import {connect} from "react-redux";
import CsvTable from "../components/CsvTable";

const CsvTableContainer = ({rows}) => <CsvTable rows={rows}/>

const mapStateToProps = state => {
    const {rows} = state.application

    return {
        rows
    }
}

export default connect(mapStateToProps)(CsvTableContainer);
