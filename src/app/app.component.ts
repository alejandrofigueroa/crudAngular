import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  // arreglo del tipo Alumno, que tiene 3 registro almacenados
  alumnoArray: Alumno[] = [
    {id:1, name:"Alex", lastname:"Campos", age:35, direccion:'Nuevos Horizontes', telefono:'1234-1234', email:'alex@gmail.com'},
    {id:2, name:"Maria", lastname:"Lopez", age:20, direccion:'Ilopango', telefono:'2134-1233', email:'maria@gmail.com'},
    {id:3, name:"Juan", lastname:"Castro", age:25, direccion:'Soyapango', telefono:'5234-1233', email:'juan@gmail.com'}
  ]
  
  //atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
  selectedAlumno: Alumno = {id:0, name:'', lastname:'', age:0, direccion:'', telefono:'', email:''};
  
  //un método que no retorna nada “void”, recibe como parámetro una variable del
  //tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
  // en pantalla.
  openForEdit(alumno: Alumno): void
  {
    this.selectedAlumno = alumno;
  }

  //método que no retorna nada “void”, NO recibe parámetro, pero realiza dos
  //operaciones agregar / editar, si no hay registro seleccionado se guarda,
  //de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]
  addOrEdit(): void
  {
    if(this.selectedAlumno.name != '' && this.selectedAlumno.lastname != '' && this.selectedAlumno.age > 0 && this.selectedAlumno.direccion != '' && this.selectedAlumno.telefono != '' && this.selectedAlumno.email != ''){
      if(this.selectedAlumno.telefono.match('[1-9]{4}-[0-9]{4}') && this.selectedAlumno.email.match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')){

        if(this.selectedAlumno.id === 0){
          this.selectedAlumno.id = this.alumnoArray.length + 1;
          this.alumnoArray.push(this.selectedAlumno);
        }
        this.selectedAlumno = {id:0, name:'', lastname:'', age:0, direccion:'', telefono:'', email:''};
      
      }else{
        alert("El formato de telefono y/o email son incorrectos");
      }

    }else{
      alert("Llene los respectivos campos");
    }
  }

  //método que no retorna nada “void”, NO recibe parámetro, elimina del arreglo el
  //registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realizando un “filter” para no almacenar el registro seleccionado en el nuevo
  //arreglo “alumnoArray” , por eso ocupados el operador “!=” y luego limpiamos
  //el registro seleccionado. 

  delete(): void{
    if(confirm('¿Esta seguro de eliminar el Registro?')){
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0, name:'', lastname:'', age:0, direccion:'', telefono:'', email:''};
    }
  }

}
