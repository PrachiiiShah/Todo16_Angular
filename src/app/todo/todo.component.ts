import { Component, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Todo } from '../model';
import { TodoServiceService } from '../services/todo-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  // taskCounter: number = 1;
  taskForm = new FormGroup({
    inputName: new FormControl('', Validators.required),
    inputEmail: new FormControl('', [Validators.required, Validators.email]),
    inputPassword: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$'),
    ]),
    inputAddress: new FormControl('', Validators.required),
    inputCity: new FormControl('', Validators.required),
    inputState: new FormControl('', Validators.required),
    inputZip: new FormControl('', Validators.required),
    
    inputGender: new FormControl('', Validators.required),

    inputDate: new FormControl('', Validators.required),
    task: new FormControl('', Validators.required),
    inputDescription: new FormControl('', Validators.required),
  });
  constructor(private todoService:TodoServiceService){}
  
  // public btnClick(): void{
  //   this._todoService.myData = 'Hello from Service';
  // }
  //@Output() taskArrayChange = new EventEmitter<Todo>();

  //taskArray: Todo[] = [];
  //Todo: Todo[] = [];

  get taskFormControl() {
    return this.taskForm.controls;
  }


  getFormValidationErrors(form: FormGroup) {
    const result: any[] = [];
    Object.keys(form.controls).forEach((key) => {
      const controlErrors: any = form.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((keyError) => {
          result.push({
            control: key,
            error: keyError,
            value: controlErrors[keyError],
          });
        });
      }
    });

    return result;
  }

  // addTask(){
  //   const task = [{ userName: this.taskForm.value.inputName }];
  //   this.taskArrayChange.emit(task);
  // }

  onSubmit() {
    
    console.log(this.taskForm.value);
    console.log(this.getFormValidationErrors(this.taskForm));
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;
   
      const newTask = {
        userName: formValue.inputName!,
        userEmail: formValue.inputEmail!,
        userPassword: formValue.inputPassword!,
        userAddress: formValue.inputAddress!,
        userCity: formValue.inputCity!,
        userState: formValue.inputState!,
        userZip: parseInt(formValue.inputZip!),
        userHobby: 'abc',
        userGender: formValue.inputGender!,
        userDate: new Date(formValue.inputDate!),
        taskName: formValue.task!,
        number:1,
        // number: this.taskCounter++,
        taskDescription: formValue.inputDescription!,
        isCompleted: false,
      };
      console.log('New Task:', newTask);

      //this.taskArray.push(newTask);
      this.todoService.addTask(newTask);
      //console.log('Task Array in TodoComponent:', this.taskArray);
      //this.taskArrayChange.emit(newTask);
      console.log('New task: ', newTask);
      // this.taskArrayChange.emit(this.taskArray);
      //console.log('Task Array Change Event Emitted');
      // this.taskForm.reset();
    } else {
      this.taskForm.markAsDirty();
      this.taskForm.markAllAsTouched(); 
      console.log(this.taskForm.errors);
    }
   // console.log('Task Array:', this.taskArray);

    console.error();
  }
}
