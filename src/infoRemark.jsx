import { Table } from 'antd';
import React from 'react';

export default function InfoRemark(props) {
  
    const columns1 = [
        {
          title: '表名',
          dataIndex: 'tableName',
          key: 'tableName',
        },
        {
          title: '集群名',
          dataIndex: 'clusterName',
          key: 'clusterName',
        },
        {
          title: '数据库',
          dataIndex: 'dataBase',
          key: 'dataBase',
        },
        {
            title: '模式',
            dataIndex: 'schema',
            key: 'schema',  
        },{
            title: '用户名',
            dataIndex: 'userName',
            key: 'userName',  
        },{
            title: '行数',
            dataIndex: 'rows',
            key: 'rows',  
        },
        {
            title: '索引名',
            dataIndex: 'indexName',
            key: 'indexName',  
        },{
            title:'主键索引',
            dataIndex:'primaryKeyIndex',
            key:'primaryKeyIndex'
        }
      ];
      const data1 = [{
        tableName:'customer',
        clusterName: 'seatle',
        dataBase: 'tpcc',
        schema:'public',
        userName:'inspur',
        rows:'30705',
        indexName:'primary,customer_idx,customer_c_first_c_middle_c_last_c_data_c_id_idx',
        primaryKeyIndex:'c_w_id,c_d_id,c_id'
      }];
      const columns2 = [
        {
          title: '列名',
          dataIndex: 'colName',
          key: 'colName',
        },
        {
          title: '表名',
          dataIndex: 'tableName',
          key: 'tableName',
        },
        {
          title: '谓词id',
          dataIndex: 'weiciId',
          key: 'weiciId',
        },
        {
            title: '基数',
            dataIndex: 'baseNo',
            key: 'baseNo',  
        },{
            title: '直方图id',
            dataIndex: 'zhifangId',
            key: 'zhifangId',  
        },{
            title: '直方图',
            dataIndex: 'zhiFangTu',
            key: 'zhiFangTu',  
        },
        {
            title: '可能相关列',
            dataIndex: 'possibleCol',
            key: 'possibleCol',  
        },{
            title:'最大相关列',
            dataIndex:'maxRelateCol',
            key:'maxRelateCol'
        },{
            title:'相关性大小',
            dataIndex:'possibleSize',
            key:'possibleSize'
        }
      ];
      const data2 = [{
        colName:'c_first',
        tableName:'customer',
        weiciId:1,
        baseNo:30895,
        zhifangId:'844081698895527938',
        zhiFangTu:'histogram1',
        possibleCol:'c_last,c_middle,c_data',
        maxRelateCol:'c_last',
        possibleSize:'0.11'
      },{
        colName:'c_middle',
        tableName:'customer',
        weiciId:2,
        baseNo:501,
        zhifangId:'844081797132484610',
        zhiFangTu:'histogram2',
        possibleCol:'c_last,c_first,c_data',
        maxRelateCol:'c_last',
        possibleSize:'0.20'
      },{
        colName:'c_last',
        tableName:'customer',
        weiciId:3,
        baseNo:1895,
        zhifangId:'844081829719572482',
        zhiFangTu:'histogram1',
        possibleCol:'c_last,c_middle,c_data',
        maxRelateCol:'c_middle',
        possibleSize:'0.11'
      }];
      const columns3 = [
        {
          title: '谓词id',
          dataIndex: 'predicateId',
          key: 'predicateId',
        },
        {
          title: '谓词类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '左子式类型',
          dataIndex: 'leftType',
          key: 'leftType',
        },
        {
            title: '右子式类型',
            dataIndex: 'rightType',
            key: 'rightType',  
        },{
            title: '谓词过滤率',
            dataIndex: 'filterfactor',
            key: 'filterfactor',  
        },{
            title: '算子过滤率',
            dataIndex: 'operatorFilter',
            key: 'operatorFilter',  
        },
        {
            title: '倾斜性',
            dataIndex: 'dataSkew',
            key: 'dataSkew',  
        },{
            title:'命中索引',
            dataIndex:'indexHit',
            key:'indexHit'
        },{
          title:'统计信息种类',
          dataIndex:'statType',
          key:'statType'
      },{
        title:'风险因子',
        dataIndex:'riskfactors',
        key:'riskfactors'
    }
      ];
      const data3 = [{
        predicateId:'1',
        type:'eq',
        leftType:'colname',
        rightType:'const',
        filterfactor:'3.3e-05',
        operatorFilter:'-1',
        dataSkew:'-1',
        indexHit:'customer_c_first_c_middle_c_last_c_data_c_id_idx',
        statType:'distinctcount',
        riskfactors:'1'
      },{
        predicateId:'2',
        type:'eq',
        leftType:'colname',
        rightType:'const',
        filterfactor:'2.0e-03',
        operatorFilter:'-1',
        dataSkew:'-1',
        indexHit:'customer_c_first_c_middle_c_last_c_data_c_id_idx',
        statType:'distinctcount',
        riskfactors:'1'
      },{
        predicateId:'3',
        type:'eq',
        leftType:'colname',
        rightType:'const',
        filterfactor:'2.0e-03',
        operatorFilter:'-1',
        dataSkew:'-1',
        indexHit:'customer_c_first_c_middle_c_last_c_data_c_id_idx',
        statType:'distinctcount',
        riskfactors:'1'
      }]
    return (
        <div>
            <Table dataSource={data1} columns={columns1} />
            <Table dataSource={data2} columns={columns2} />
            <Table dataSource={data3} columns={columns3} />
        </div>
    )
};
