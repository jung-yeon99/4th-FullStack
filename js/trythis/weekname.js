/** 오늘 날짜의 요일을 출력하는 switch 문을 
 * 
 */
function getWeekName() {
    let weekname;
    switch (day) {
        case 0:
            weekname = '얼';
            break;
        case 1:
            weekname = '화';
            break;
        case 2:
            weekname = '수';
            break;
        case 3:
            weekname = '목';
            break;
        case 4:
            weekname = '금';
            break;
        case 5:
            weekname = '토';
            break;
        case 6:
            weekname = '일';
            break;
        default:
            throw new Error('Not vaild weekday!!');
    }
    console.log(`오늘은 ${weekname}요일 입니다.`);
}
const yyyy = date.getFullYear();
const date = new Date();
for(let i =0; i< 10; i++){
    date.setDate(date.getDate()+1);
    const day = date.getDate();

    // console.log(date.toString(), day);
    getWeekName(date);
}