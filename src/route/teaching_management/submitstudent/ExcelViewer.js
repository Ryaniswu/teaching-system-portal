///用于显示单行表头和复杂表头的组件
import React, {Component} from "react";
import {Table, Tabs} from "antd";
import {randomString} from "../../../util/string";
import "./ExcelViewer.css";

const TabPane = Tabs.TabPane;

let columnIdx = 0;//仅仅只在convertComplexTitle,convertSimpleColumns里面使用
/**
 * 将服务器传过来的复杂表头和其对应的数据转换为适合前端显示的方式
 * 将会返回一个对象：{columns,dataSource}, 其是可以传给Table组件属性的数据
 */
function convertComplexTitle(_columns, data, sheetId) {
  let dataIndex = [], columns = [];
  columnIdx = 0;
  for (let c of _columns) {
    let res = _convertComplexColumns(c, sheetId);
    dataIndex.push(...res.dataIndex);
    columns.push(res.column);
  }
  let _data = [];
  let idx = 0;
  for (let datum of data) {
    let obj = {key: ++idx};
    for (let i = 0; i < datum.length; ++i) {
      obj[dataIndex[i]] = datum[i];
    }
    _data.push(obj);
  }
  console.log(columns);
  return {columns, dataSource: _data};
}

/**
 * 内部使用
 * 对复杂表头的数据进行处理，转换为符合Table组件格式要求的数据
 * 返回值：{columns,dataIndex}
 */
function _convertComplexColumns(column, sheetId) {
  let dataIndex = [];
  let _column = {title: column.name};
  if (column.children && column.children.length > 0) {
    _column.children = [];
    for (let c of column.children) {
      let res = _convertComplexColumns(c, sheetId);
      dataIndex.push(...res.dataIndex);
      _column.children.push(res.column);
    }
  } else {
    let _dataIdx = randomString(15);
    let newColumnIdx = columnIdx;
    _column = {
      ..._column,
      dataIndex: _dataIdx,
      key: _dataIdx,
      onHeaderCell: column => ({
        "data-columnkey": _dataIdx,
        "data-columnidx": newColumnIdx,
        "data-sheetid": sheetId
      }),
      onCell: () => ({
        "data-columnkey": _dataIdx,
        "data-columnidx": newColumnIdx,
        "data-sheetid": sheetId
      })
    };
    ++columnIdx;
    dataIndex.push(_dataIdx);
  }
  return {column: _column, dataIndex};
}

function convertSimpleColumns(_columns, data, sheetId) {
  let columns = [], _data = [];
  columnIdx = 0;
  for (let c of _columns) {
    let key = randomString(8);
    let newColumnIdx = columnIdx;
    columns.push({
      title: c.name,
      dataIndex: key,
      key,
      onHeaderCell: column => ({
        "data-columnkey": key,
        "data-columnidx": newColumnIdx,
        "data-sheetid": sheetId
      }),
      onCell: () => ({
        "data-columnkey": key,
        "data-columnidx": newColumnIdx,
        "data-sheetid": sheetId
      })
    });
    ++columnIdx;
  }
  for (let datum of data) {
    let _datum = {key: datum[0]};
    for (const [idx, val] of Object.entries(datum)) {
      _datum[columns[idx].dataIndex] = val;
    }
    _data.push(_datum);
  }
  return {columns, dataSource: _data};
}

/**
 * 将服务器传来的数据转换为Table组件可识别的数据
 * @param {Array} columns
 * @param {Array} data
 * @returns {{columns, dataSource}}
 */
function fitColumnsForTable(columns, data, sheetId) {
  let dataSourceIndex = {};
  //判断是否是复杂表头
  const isComplexColumn = columns.filter(e => (e.children || []).length > 0).length > 0;
  if (isComplexColumn) {
    dataSourceIndex = convertComplexTitle(columns, data, sheetId);
  } else {
    dataSourceIndex = convertSimpleColumns(columns, data, sheetId);
  }
  return dataSourceIndex;
}

class SheetViewer extends Component {

  handleHeaderClick(ele) {
    console.log("ele",ele)
    let {onSelectColumn} = this.props;
    if (!onSelectColumn) return;
    let targetEle = ele;
    while (targetEle && !targetEle.getAttribute("data-columnidx")) {
      targetEle = targetEle.parentElement;
    }
    let id = parseInt(targetEle.getAttribute("data-columnidx"));
    let sheetId = parseInt(targetEle.getAttribute("data-sheetid"));


    this.props.onSelectColumn(targetEle, id, ele.innerText, sheetId);
  }

  render() {
    const {columns, sheetId, data, onSelectColumn, ...otherProps} = this.props;
    let dataSourceIndex = fitColumnsForTable(columns, data, sheetId);
    console.log("dataSourceIndex", dataSourceIndex)
    return <Table {...dataSourceIndex} bordered scroll={{x: true}}
                  onHeaderRow={(column) => {
                    return {
                      onClick: (x) => {
                        this.handleHeaderClick(x.target);
                      }
                    }
                  }} {...otherProps}/>
  }

}

class ExcelViewer extends Component {
  render() {
    let {
      //表中的各个Sheet
      sheets,
      //此选项不为空时表示可选列，若为空时不可选列，有三个参数(点击的表头元素，列ID，列名)
      //其中列ID为数据值的ID，从0开始
      onSelectColumn,
      ...otherProps
    } = this.props;
    if (!sheets) {
      return <div/>
    }
    return <Tabs>
      {
        sheets.map((sheet, idx) =>
          <TabPane tab={sheet.sheetName} key={sheet.sheetId || `sheet${idx}`}>
            <SheetViewer columns={sheet.columns} data={sheet.data} sheetId={idx} onSelectColumn={onSelectColumn} {...otherProps}/>
          </TabPane>
        )
      }
    </Tabs>
  }
}

export {
  ExcelViewer,
  SheetViewer,
  fitColumnsForTable,
}
