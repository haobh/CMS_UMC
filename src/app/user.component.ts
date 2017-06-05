import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-list',
    templateUrl: './user.component.html'
})
export class UserListComponent implements OnInit {
    public users: any[];  //khai bao de chua 1 mang danh sach
    public keyword: string;
    constructor(private userService: UserServices, private router: Router,
        private activateRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.LoadData();

    }
    //Ham LoadData sau khi xu lý nghiep vu
    LoadData() {
        this.userService.GetList().subscribe((response: any) => {
            this.users = response; //Truyen employees sang View Template
            //console.log(response);  //ghi log xem da lay du lieu chua
        }, error =>{
            console.log(error);   //Ghi log Error
        });
    }
    //Xóa bản ghi
    Delete(id: number) {
        let confirmResult = confirm("Bạn muốn xóa bản ghi ?");
        if (confirmResult) {
            this.userService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete Success !!');
                    this.LoadData();
                }
            },error=>
            {
                    alert(error.text());
                    console.log(error.text());
            });
        }
    }
    //Ham Search
    Search() {
        this.userService.Search(this.keyword).subscribe((response: any) => {
            this.users = response; //Truyen user sang View Template
            //console.log(response);  //ghi log xem da lay du lieu chua
        }, error =>
        {
            alert(error.text());
            //console.log(error);   //Ghi log Error
        });
    }

}