import { Component, OnInit, ViewChild } from '@angular/core';
import { TableListService } from './table-list.service';
import { iTableList } from './model';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  public dataSource;
  public tableListData;
  public stateData = '';



  constructor(private tableService: TableListService) { }
  ngOnInit() {
    this.tableService.getTableList().subscribe( tableData  => {
      this.tableListData = tableData;
      this.dataSource = this.tableListData ;
    });
   
  }
  setOrder(value: any, state: string) {
    this.tableListData.sort(
      (a: any, b: any) => {
        let valueA = a[value];
        let valueB = b[value];

         if(state === 'asc'){
          if(valueA > valueB){
            return 1;
          } else if(valueA < valueB) {
            return -1;
          }
          return 0;
         } 
        if(state === 'des'){
          if(valueA < valueB){
            return 1;
          } else if(valueA > valueB) {
            return -1;
          }
          return 0;
        }
      }
    );
    this.dataSource = JSON.parse(JSON.stringify(this.tableListData));
  }

  getList(list, index){
   this.stateData = list;
  }


}
