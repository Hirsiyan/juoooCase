class Tools {
    static date(v) {
        let arr=[];
        if(v){
            arr = v.split(".")
            return arr[1]+"/"+arr[2]

        }
    }
}
export default Tools;
