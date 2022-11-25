export function GetClass(id){
    if (id % 5 === 0) {
        return 'big';
    }
    else if (id % 6 === 0) {
        return 'wide'
    }else{
        return ""
    }
}