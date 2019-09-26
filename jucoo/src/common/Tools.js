
class Tools {
    static date(v) {
        let arr=[];
        if(v){
            arr = v.split(".")
            return arr[1]+"/"+arr[2]

        }
    }
    static time(v) {
            const date = new Date(v);
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
            return M+D
        }
}
export default Tools;

