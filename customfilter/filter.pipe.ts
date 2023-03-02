import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class Filter implements PipeTransform {
    transform(list: any, search: string): any {
        if (list.length === 0 || search === '') {
            return list;
        } else {
                return list.filter((lists: any) => {
                console.log(lists);
                console.log(lists.toLowerCase().indexOf(search.toLowerCase()) !==-1);
                return lists.toLowerCase().indexOf(search.toLowerCase()) !==-1
            })
        }
    }
}