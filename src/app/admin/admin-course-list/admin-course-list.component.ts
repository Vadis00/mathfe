import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; ;
import { MatDialog } from '@angular/material';
import { environment } from '../../../environments/environment';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
// course-list component

@Component({
  selector: 'ag-admin-course-list',
  templateUrl: './admin-course-list.component.html',
  styleUrls: ['./admin-course-list.component.css']
})

export class AdminCourseListComponent implements OnInit {

  private _beURL = environment.apiURL + '/';
  public courses: Course[];
  public loading: boolean = true;

  // sort block

  public sortedByTitle: boolean = false;
  public sortedByDescription: boolean = false;
  public sortedByStart: boolean = false;
  public sortedByEnd: boolean = false;

  public reversedByTitle: boolean = false;
  public reversedByDescription: boolean = false;
  public reversedByStart: boolean = false;
  public reversedByEnd: boolean = false;

  constructor(
    private _router: Router,
    private courseService: CourseService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.courseService.getCourses()
      .subscribe(items => {
        this.courses = items.sort(this._sortById);
        this._updateloading(false);
      });
  }

  private _updateloading(status: boolean): void {
    this.loading = status;
  }

  resetUpdateStatus() {
    this.courseService.updateStatus = '';
  }

  get updateStatus(): string {
    return this.courseService.updateStatus;
  }

  public imageUrl(url: string): string {
    return this._beURL + url;
  }

  public editCourse(id: number): void {
    this._router.navigate(['/admin/courses/edit', id]);
    setTimeout(() => window.scrollTo(0, 0), 0);
  }
  
  // open dialog block

  public openDialog(id: number): void {
    this.dialog.open(ConfirmDialogComponent, { data: { message: "Are you sure?", title: "Delete Course" } }).afterClosed().
      subscribe(ifYes => {
        if (ifYes) {
          //accepted
          this._router.navigate(['/admin/courses/delete', id]);
        } else {
          //rejected
        }
      });
  }

  // sort block

  public sortBy(str: string): void {
    if (this.courses && this.courses.length) {
      switch (str) {
        case 'title':
          if (this.sortedByTitle) {
            this.courses.reverse();
            this._resetSort();
            this.reversedByTitle = true;
          }
          else {
            this.courses.sort(this._sortByTitle);
            this._resetSort();
            this.sortedByTitle = true;
          }
          break;
        case 'description':
          if (this.sortedByDescription) {
            this.courses.reverse();
            this._resetSort();
            this.reversedByDescription = true;
          }
          else {
            this.courses.sort(this._sortByDescription);
            this._resetSort();
            this.sortedByDescription = true;
          }
          break;
        case 'start':
          if (this.sortedByStart) {
            this.courses.reverse();
            this._resetSort();
            this.reversedByStart = true;
          }
          else {
            this.courses.sort(this._sortByStart);
            this._resetSort();
            this.sortedByStart = true;
          }
          break;
        case 'end':
          if (this.sortedByEnd) {
            this.courses.reverse();
            this._resetSort();
            this.reversedByEnd = true;
          }
          else {
            this.courses.sort(this._sortByEnd);
            this._resetSort();
            this.sortedByEnd = true;
          }
          break;
      }
    }
  }

  private _sortById(a: Course, b: Course): number {
    if (a.id < b.id) {
      return -1;
    } 
    else if (a.id > b.id) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private _sortByTitle(a: Course, b: Course): number {
    if (a.course.toLowerCase() < b.course.toLowerCase()) {
      return -1;
    } 
    else if (a.course.toLowerCase() > b.course.toLowerCase()) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private _sortByDescription(a: Course, b: Course): number {
    if (a.description.toLowerCase() < b.description.toLowerCase()) {
      return -1;
    } 
    else if (a.description.toLowerCase() > b.description.toLowerCase()) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private _sortByStart(a: Course, b: Course): number {
    if (a.start_maxile_score < b.start_maxile_score) {
      return -1;
    } 
    else if (a.start_maxile_score > b.start_maxile_score) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private _sortByEnd(a: Course, b: Course): number {
    if (a.end_maxile_score < b.end_maxile_score) {
      return -1;
    } 
    else if (a.end_maxile_score > b.end_maxile_score) {
      return 1;
    }
    else {
      return 0;
    }
  }

  private _resetSort(): void {
    this.sortedByTitle = false;
    this.sortedByDescription = false;
    this.sortedByStart = false;
    this.sortedByEnd = false;
    this.reversedByTitle = false;
    this.reversedByDescription = false;
    this.reversedByStart = false;
    this.reversedByEnd = false;
  }

}