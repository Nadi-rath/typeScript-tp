import date from './date';
import {Priority} from './priority'; 


classe Task{
    public _content : string;
    public _date : date;
    public _priority : priority;

    constructor( content:string, date:date, priority:Priority, checked:boolean){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }
 get content (): string{
        return this._content;
    }

    get date (): date{
        return this._date;
    }

    get priority (): Priority{
        return this._priority;
    }

    get checked (): boolean{
        return this._checked;
    }
set content (content:string){
            this._content=content;
    }

    set date (date:date){
        this._date=date;
    }

    set priority (priority:Priority){
        this._priority=priority;
    }

    set checked (checked:boolean){
        this._checked=checked;
    }

    public add ( content:string, date:date, priority:Priority ) : number{
    let id : number
    return id; 
} 
public update ( content?:string, date?:date, priority?:Priority,checked?:boolean ){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
}

public close (checked:boolean) : boolean{
    return true;
}

public toString ( content:string, date:date, priority:Priority,checked:boolean ) : string {
        content = this._content;
        date = this._date;
        priority = this._priority;
        checked = this._checked;

        let tach : string = " CONTENU : " +content+ "\n DATE : " +date+ "\n PRIORITE : " +priority+ "\n ETAT : " +checked ;
        return tach; 

}



}